import { CollaborativeRoom } from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions';
import { getClerkUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { redirect, useParams, useSearchParams } from 'next/navigation';
import React from 'react'


const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({roomId: id, userId: clerkUser.emailAddresses[0].emailAddress});
  if(!room) redirect('/');

  const userIds = Object.keys(room.usersAccesses);
  const users = await getClerkUsers({userIds});
  const usersdata = users.map((user: User)=>({
    ...user,
    userType: room.usersAccesses[user.email]?.includes('room:write') ? 'editor' : 'viewer',
  }));
  
  const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write') ? 'editor' : 'viewer';

  return (
    <main className='flex flex-col w-full items-center'>
      <CollaborativeRoom 
        roomId = {id}
        roomMetadata = {room.metadata}
        users={usersdata}
        currentUserType={currentUserType}
      />
    </main>
  )
}

export default Document
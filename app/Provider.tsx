"use client";
import { Loader } from '@/components/Loader';
import { LiveblocksProvider, ClientSideSuspense, RoomProvider } from '@liveblocks/react';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
}

export default Provider
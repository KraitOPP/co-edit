'use client'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React, { useRef, useState } from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import ActiveCollaborators from './ActiveCollaborators'
import { Input } from './ui/input'

export const CollaborativeRoom = ({roomId, roomMetadata} : CollaborativeRoomProps) => {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
                    <Header>
                        <div ref={containerRef} className='flex w-fit items-center justify-center gap-2'>
                            {editing && !loading ? (
                                <Input />
                            ): (
                                <p className='document-title'>{documentTitle}</p>
                            )}
                        </div>
                        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                            <ActiveCollaborators />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

import { CollaborativeRoom } from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import React from 'react'

function Document() {
  return (
    <main className='flex flex-col w-full items-center'>
      <CollaborativeRoom />
    </main>
  )
}

export default Document
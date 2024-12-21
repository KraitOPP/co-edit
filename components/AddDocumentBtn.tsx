'use client';
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions';
import { useRouter } from 'next/navigation';

const AddDocumentBtn = ({userId, email}: AddDocumentBtnProps) => {
    const router = useRouter();
    const addDocumentHandler = async () => {
        try {
            const newRoom = await createDocument({userId, email});

            if(newRoom){
                router.push(`documents/${newRoom.id}`);
            }

        } catch (error) {
            console.error("Error Creating Document ", error);
        }
    }
  return (
    <Button type='submit' onClick={addDocumentHandler} className='gradient-blue flex gap-1 shadow-md'>
        <Image src='/assets/icons/add.svg' width={24} height={24} alt='add' />
        <p className='hidden sm:block'>Start a blank document</p>
    </Button>
  )
}

export default AddDocumentBtn
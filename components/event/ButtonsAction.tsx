'use client'
import { Icons } from '@/config/icons'
import React from 'react'
import { Button } from '../ui/button'

const ButtonsAction = () => {
   return (
      <div className='flex items-center gap-4'>
         <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
            <Icons.calendar className='text-white' width={20} />
         </button>
         <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
            <Icons.bookmark className='text-white' width={20} />
         </button>
         <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
            <Icons.link className='text-white' width={20} />
         </button>
         <Button type='button' className='bg-primary rounded-md hover:bg-primary-foreground text-white flex gap-2' aria-label='buy ticket'>
            Ver bilhete
         </Button>
      </div>
   )
}

export default ButtonsAction

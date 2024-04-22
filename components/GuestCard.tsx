import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

const GuestCard = () => {
   return (
      <>
         <div className='size-64'>
            <AspectRatio ratio={1 / 1} className="bg-muted relative rounded-md isolation-auto card-layout">
               <Image
                  src='/member4.jpg'
                  alt=''
                  fill
                  className="object-cover"
               />
               <div className='absolute bottom-0 text-center w-full  p-1 z-10 text-white'>
                  <h3 className='body-medium'>Carlos Armando</h3>
                  <h4 className='small-semibold text-slate-200 '>Artista</h4>
               </div>
            </AspectRatio>
         </div>
      </>
   )
}

export default GuestCard

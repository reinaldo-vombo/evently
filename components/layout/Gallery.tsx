'use client'
import { Icons } from '@/config/icons'
import { siteConfig } from '@/config/siteConfig'
import Image from 'next/image'
import React, { useState } from 'react'

const Gallery = () => {
   const [showVideo, setShowVideo] = useState(false)
   return (
      <div className='space-y-4'>
         <div className='flex items-center justify-between'>
            <h2 className='h3-bold'>Galeria</h2>
            <div className='flex items-center gap-4'>
               <button type='button' className={`w-20 p-2 rounded-md text-white ${showVideo === false ? 'bg-violet-700' : 'bg-violet-500'}`} onClick={() => setShowVideo(false)}>Fotos</button>
               <button type='button' className={`w-20 p-2 rounded-md text-white ${showVideo === true ? 'bg-violet-700' : 'bg-violet-500'}`} onClick={() => setShowVideo(true)}>Videos</button>
            </div>
         </div>
         <div className='grid gap-4 grid-cols-12'>
            {siteConfig.events.map((item) => (
               <div className='col-span-3'>
                  {showVideo ? (
                     <div className='relative'>
                        <video src="/01.mp4" poster='/avatar.jpg' autoPlay={false} controls={false}></video>
                        <button type='button' className='rounded-full bg-black size-12 absolute m-auto inset-0 flex items-center justify-center'>
                           <Icons.play width={20} />
                        </button>
                     </div>
                  ) : (
                     <Image src={item.image} className='w-full rounded-lg' alt={item.title} width={600} height={400} />
                  )}
               </div>
            ))}
         </div>
      </div>
   )
}

export default Gallery

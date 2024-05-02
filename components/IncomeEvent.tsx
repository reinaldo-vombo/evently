'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Icons } from '@/config/icons'
import { siteConfig } from '@/config/siteConfig'

const IncomeEvent = () => {
   const leatesEvent = siteConfig.events[0]
   const [selectedImg, setSelecteImg] = useState<number | null>(null)
   const [imageUrl, setImageUrl] = useState(leatesEvent.image)

   const handleSelectedImage = (imgUrl: StaticImageData, index: number) => {
      setImageUrl(imgUrl)
      setSelecteImg(index)
   }

   return (
      <div className='grid grid-cols-12 gap-4'>
         <div className="col-span-8">
            <div className='relative h-[330px] w-full card-layout'>
               <Image src={imageUrl} className='rounded-lg object-cover' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='banner image' />
            </div>
         </div>
         <div className="col-span-4">
            <div className='bg-background rounded-lg relative h-60'>
               <Image src='/top-b.png' className='rounded-lg object-cover absolute top-0 left-0' width={216} height={237} alt='banner image' />
               <Image src='/left-b.png' className='rounded-lg object-cover absolute top-[-5px] right-0' width={190} height={248} alt='banner image' />
               <Image src='/rigth-b.png' className='rounded-lg object-cover absolute top-[161px] left-0' width={190} height={248} alt='banner image' />

               <div className='absolute inset-0 z-10 space-y-3 p-1'>
                  <h2 className='base-semibold mt-5'>Big consert music event after a long time not held with a popular band</h2>
                  <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem nisi corporis repellendus doloribus quas ipsa dolore optio rerum! Dolore facilis debitis maxime tenetur magnam minima nobis illum error soluta!</p>
                  <div className='flex items-center justify-between'>
                     <Button>Participar</Button>
                     <Button>
                        <Icons.link width={20} />
                     </Button>
                  </div>
               </div>
            </div>
            <div className='flex items-center gap-2 w-full mt-4'>
               {leatesEvent.images.map((item, index) => (
                  <button type='button' className={`relative rounded-lg h-[80px] w-full ${selectedImg === index ? 'border border-primary' : ''}`} aria-label={leatesEvent.title} key={index} onClick={() => handleSelectedImage(item, index)}>
                     <Image src={item} className='rounded-lg object-cover' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='banner image' />
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default IncomeEvent

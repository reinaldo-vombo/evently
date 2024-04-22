'use client'

import Image from 'next/image'
import { Icons } from '@/config/icons'
import Link from 'next/link'
import { ICardEvent } from '@/interfaces'
import { avatar } from '@/public'
import { useState } from 'react'
import Loader from '../Loader'

const CardEvent = ({ image, title, id }: ICardEvent) => {
   const [loadVideo, setLoadVideo] = useState(false)
   const [video, setVideo] = useState('')
   const [loading, setLoading] = useState(false);
   let hoverTimer: NodeJS.Timeout | null = null;

   const loadDemo = () => {
      setLoading(true);
      setTimeout(() => {
         setVideo('/01.mp4');
         setLoadVideo(true)
         setLoading(false);
      }, 2000);
   }
   const handleMouseEnter = () => {
      hoverTimer = setTimeout(loadDemo, 2000); // Start the timer when mouse enters
   };

   const handleMouseLeave = () => {
      if (hoverTimer) clearTimeout(hoverTimer);
      hoverTimer = null;
      setLoadVideo(false); // Ensure video is not loaded if mouse leaves
   };

   return (
      <div className='col-span-6 bg-black rounded-lg p-4 w-[25rem] flex items-center flex-col gap-6'>
         <div className='relative w-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {loadVideo === false ? (
               <div className='relative h-72 w-full'>
                  <Link href={`/eventos/${id}`} aria-label='event image' >
                     <Image
                        src={image}
                        alt={title}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover w-full "
                     />
                  </Link>
               </div>
            ) : (
               <video src={video} className='w-full h-[27rem] rounded-lg' autoPlay={true}></video>
            )}
            {loading && <Loader />} {/* Display loading message if loading */}
         </div>
         <div className='space-y-6 w-full'>
            <div className='w-full'>
               <h2 className='h3-bold line-clamp-2'>{title}</h2>
            </div>
            <div className='flex items-center gap-6 text-white'>
               <div className='flex items-center gap-2'>
                  <Icons.calendar width={20} />
                  <b className='text-xs text-slate-500'>Sab, 10.Oct, 2024</b>
               </div>
               <div className='flex items-center gap-2'>
                  <Icons.users width={20} />
                  <b className='text-xs text-slate-500'>200</b>
               </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
               <div className='flex items-center gap-3'>
                  <Image src={avatar} className='rounded-full size-10' width={460} height={460} alt='user' />
                  <h3 className='font-semibold tracking-wide text-base'>Reinaldo Vombo</h3>
               </div>
               <div className='flex items-center gap-3'>
                  <button type='button' className='rounded-full bg-violet-500 size-10 flex items-center justify-center' aria-label='shard icon'>
                     <Icons.bookmark width={20} className='text-white' />
                  </button>
                  <button type='button' className='rounded-full bg-violet-500 size-10 flex items-center justify-center' aria-label='shard icon'>
                     <Icons.link width={20} className='text-white' />
                  </button>
               </div>
            </div>
         </div>

      </div>
   )
}

export default CardEvent

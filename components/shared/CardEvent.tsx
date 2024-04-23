'use client'

import Image from 'next/image'
import { Icons } from '@/config/icons'
import Link from 'next/link'
import { ICardEvent } from '@/interfaces'
import { avatar } from '@/public'

const CardEvent = ({ image, title, id }: ICardEvent) => {

   return (
      <div className='col-span-6 bg-[#30363db3] rounded-lg p-4 flex items-center flex-col gap-6'>
         <div className='relative w-full'>
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

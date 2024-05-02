'use client'

import Image from 'next/image'
import { Icons } from '@/config/icons'
import Link from 'next/link'
import { ICardEvent } from '@/interfaces'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const CardEvent = ({ image, title, id }: ICardEvent) => {

   return (
      <div className='col-span-4'>
         <div className='relative w-full'>
            <div className='relative h-96 w-full card-layout'>
               <Link href={`/eventos/${id}`} aria-label='event image' >
                  <Image
                     src={image}
                     alt={title}
                     fill={true}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover w-full rounded-lg"
                  />
               </Link>
               <div className='absolute inset-0 z-10 flex flex-col justify-between p-3'>
                  <button type='button' className='ml-auto' aria-label='favorite icon'>
                     <Icons.heart width={20} />
                  </button>
                  <div className='space-y-5'>
                     <Link href={`/eventos/${id}`} aria-label='event image' >
                        <h2 className='h3-bold'>{title}</h2>
                     </Link>
                     <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                           <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                              <AvatarFallback>CN</AvatarFallback>
                           </Avatar>
                           <span>Reinaldo Vombo</span>
                        </div>
                        <Button type='button' className='bg-primary py-1'>Participar</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CardEvent

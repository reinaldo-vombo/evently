'use client'
import Map from '@/components/shared/Map'
import { ScrollArea } from '@/components/ui/scroll-area'
import { siteConfig } from '@/config/siteConfig'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'

export default function page() {
   return (
      <section className='space-y-7'>
         <div className='text-left'>
            <h2 className='h1-semibold'>Explore</h2>
            <p className='font-medium text-slate-500'>Procure eventos proximo de ti</p>
         </div>
         <div className='grid grid-cols-12 gap-3'>
            <div className='h-[27rem] col-span-8'>
               <Map />
            </div>
            <ScrollArea className='h-[27rem] w-full grid gap-4 col-span-4 px-4'>
               {siteConfig.events.map((item) => (
                  <div className='rounded-lg p-2' key={item.id}>
                     <div className='relative w-full h-28'>
                        <Image src={item.image} className='rounded-lg object-cover' fill alt={item.title} />
                     </div>
                     <div>
                        <h2>{item.title}</h2>
                     </div>
                  </div>
               ))}
            </ScrollArea>
         </div>
      </section>
   )
}

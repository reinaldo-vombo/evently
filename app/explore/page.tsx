import React from 'react'

export default function page() {
   return (
      <section className='space-y-7'>
         <div className='text-left'>
            <h2 className='h1-semibold'>Explore</h2>
            <p className='font-medium text-slate-500'>Procure eventos proximo de ti</p>
         </div>
         <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-7 bg-black'>
               map
            </div>
            <div className='col-span-5 bg-black p-2'></div>
         </div>
      </section>
   )
}

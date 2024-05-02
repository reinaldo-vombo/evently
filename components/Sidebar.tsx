'use client'

import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
   const path = usePathname()

   return (
      <aside className='fixed left-0 top-0 bottom-0 w-[16.666667%] z-50 text-white p-2 flex flex-col h-screen bg-background'>
         <div className='grid mt-4'>
            <div className='flex items-center'>
               <Link href='/' className='flex items-center gap-2'>
                  <span className='bg-violet-500 size-[2.9rem] rounded-full flex items-center justify-center font-bold'>ET</span>
                  <b>Evently</b>
               </Link>
            </div>
            <div className='mt-24'>
               <ul className='grid gap-6'>
                  {siteConfig.menus.map((item) => (
                     <li key={item.id}>
                        <Link href={item.route} className={`flex items-center gap-2 ${path === item.route ? 'active-link' : ''}`}>
                           {item.icon}
                           <b>{item.label}</b>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </aside>
   )
}

export default Sidebar

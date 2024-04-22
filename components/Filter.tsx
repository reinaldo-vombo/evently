'use client'

import { siteConfig } from "@/config/siteConfig"
import { useState } from "react"

const Filter = () => {
   const [selected, setSelected] = useState(0)
   const selectedItem = (index: any) => {
      setSelected(index)
   }
   return (
      <div className='flex items-center justify-between'>
         <h2 className='h3-bold'>Feed</h2>
         <div className='flex items-center justify-center gap-6 my-12'>
            {siteConfig.categorys.map((item, index) => (
               <div className='flex items-center gap-2' key={index}>
                  <button type='button' className={`rounded-lg ${selected === index ? 'bg-violet-500' : ''} p-1 flex items-center justify-center`} onClick={() => selectedItem(index)} aria-label='filer icon'>
                     <span className='font-bold text-base'>{item.name}</span>
                  </button>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Filter

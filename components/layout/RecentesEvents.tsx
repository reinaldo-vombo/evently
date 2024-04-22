import { siteConfig } from "@/config/siteConfig"
import Image from "next/image"

const RecentesEvents = () => {
   return (
      <div className='bg-black p-2 rounded-md fixed right-0 bottom-0 top-0 w-[19.666667%]'>
         <div className='text-left mb-6'>
            <h2 className='h3-bold'>Eventos Recentes</h2>
         </div>
         <div className='grid place-content-between gap-6'>
            {siteConfig.events.map((item) => (
               <div className='flex items-center gap-1' key={item.id}>
                  <div className='relative size-12'>
                     <Image src={item.image} className='rounded-full w-full size-[2.9rem]' width={500} height={500} alt={item.title} />
                  </div>
                  <h3 className='text-slate-500 text-[9px] font-bold line-clamp-1'>{item.title}</h3>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RecentesEvents

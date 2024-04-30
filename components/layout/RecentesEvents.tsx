import { siteConfig } from "@/config/siteConfig"
import { event4 } from "@/public"
import Image from "next/image"

const RecentesEvents = () => {
   return (
      <div className='fixed right-2 bottom-0 top-[93px] w-[19.666667%] grid gap-5'>
         <div className='bg-[#30363db3] rounded-md h-60'>
            <Image src={event4} className='w-full h-full rounded-md' width={240} height={240} alt='event' />
         </div>
         <div className='bg-[#30363db3] text-white p-2 rounded-md'>
            <div className='text-left mb-6'>
               <h2 className='h3-bold'>Eventos Recentes</h2>
            </div>
            <div className='grid place-content-between gap-6'>
               {siteConfig.events.map((item) => (
                  <div className='flex items-center gap-1' key={item.id}>
                     <div className='relative size-12'>
                        <Image src={item.image} className='rounded-full w-full size-[2.9rem]' width={500} height={500} alt={item.title} />
                     </div>
                     <h3 className='text-[9px] font-bold line-clamp-1'>{item.title}</h3>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default RecentesEvents

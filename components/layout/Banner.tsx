import Image from "next/image"
import Filter from "../Filter"
import AllEvents from "./AllEvents"
import RecentesEvents from "./RecentesEvents"
import { event1 } from "@/public"

const Banner = () => {
   return (
      <section className='pt-[100px] pl-20 grid grid-cols-12 gap-6'>
         <div className='col-span-9'>
            <div className='relative card-layout'>
               <Image src={event1} className='rounded-lg h-48 w-full object-cover' width={5977} height={4016} alt='banner image' />
               <div className='text-left absolute left-0 top-0 p-[.9rem] z-10'>
                  <h2 className='h1-semibold'>Bem-vindo de volta, Reinaldo</h2>
                  <p className='font-medium text-gray-100'>Que tipo de evento procuras?</p>
                  {/* <p className='font-medium text-slate-500'>Um dia feliz com teus eventos favoritos</p> */}
               </div>
            </div>
            <Filter />
            <AllEvents />
         </div>
         <RecentesEvents />
      </section>
   )
}

export default Banner

import { Icons } from "@/config/icons"
import Image from "next/image"
import Link from "next/link"
import { Input } from "./ui/input"


const NavBar = () => {
   return (
      <header className='w-full h-20 py-2 bg-background z-20 mb-4'>
         <nav className='mr-4 h-full text-white flex items-center justify-between'>
            <div className='relative'>
               <Input type="search" className="border-none px-8 bg-[#e0e0e01f]" placeholder="pesquisar" />
               <Icons.search width={20} className="absolute top-3 left-2 " />
            </div>
            <div className='flex items-center gap-9'>
               <div className='flex items-center gap-6'>
                  <button type='button' className='size-[2.9rem] bg-[#141414] rounded-full flex items-center justify-center' aria-label='chat icon'>
                     <Icons.sun className='text-yellow-500 animate-spin' width={20} />
                  </button>
                  <button type='button' className='size-[2.9rem] bg-[#141414] rounded-full flex items-center justify-center' aria-label='chat icon'>
                     <Icons.bell className='text-white' width={20} />
                  </button>
               </div>
               <div className='flex items-center gap-4'>
                  <div className=''>
                     <Image src='/avatar.jpg' className='rounded-full size-[2.9rem]' width={460} height={460} alt='user avatar' />
                  </div>
                  <h3 className='small-regular'>Reialdo Vombo</h3>
               </div>
            </div>
         </nav>
      </header>

   )
}

export default NavBar

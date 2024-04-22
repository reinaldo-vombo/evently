import { Icons } from "@/config/icons"
import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
   return (
      <header className='fixed w-full h-20 py-2 bg-black z-10'>
         <nav className='mr-60 h-full text-white flex items-center justify-between'>
            <div className='size-[2.9rem] rounded-full bg-[#141414] flex items-center justify-center'>
               <Link href='/search' aria-label='search icon'>
                  <Icons.search width={20} />
               </Link>
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

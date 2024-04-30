import Image from 'next/image'
import React from 'react'

const Gradiente = () => {
   return (
      <div className='absolute -z-10'>
         <Image src='/gradiente.png' className='w-[77%] relative m-auto -top-5' width={962} height={854} alt='gradient' />
      </div>
   )
}

export default Gradiente

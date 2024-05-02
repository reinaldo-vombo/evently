import Image from 'next/image'
import React from 'react'

const Gradiente = () => {
   return (
      <div className='absolute top-0 w-full'>
         <Image src='/gradiente.png' className='w-[54%] relative m-auto -top-5' width={962} height={854} alt='gradient' />
      </div>
   )
}

export default Gradiente

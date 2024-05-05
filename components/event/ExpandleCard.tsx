'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { cardVariant, headingVariants } from "./motion";
import Image, { StaticImageData } from "next/image";
interface IExpandleCard {
   index: number
   photo: StaticImageData
   name: string
}

const ExpandleCard = ({ index, photo, name }: IExpandleCard) => {
   const [expandIndex, setExpandIndex] = useState(0)
   const handleCard = (index: number) => {
      if (index !== 0 || expandIndex !== 0) {
         setExpandIndex(index);
      }
      // setExpandIndex(index === expandIndex ? null : index)
   }

   return (
      <motion.div
         initial="collapsed"
         animate={index === expandIndex ? "expanded" : "collapsed"}
         variants={cardVariant}
         transition={{ duration: 0.5 }}
         onMouseEnter={() => handleCard(index)}
         onMouseLeave={() => handleCard(-1)}
         className={`relative h-[20rem] overflow-hidden ${index === expandIndex ? 'expande' : ''}`}
      >
         <Image src={photo} className='w-full h-full object-cover rounded-lg' fill alt={name} />
         <div className={`absolute inset-0 ${index === expandIndex ? 'bg-[#12192299]' : ''}`}>
            <motion.h2 variants={headingVariants}
               transition={{ ease: 'linear', delay: .5 }}
               className='h3-bold'
               initial="collapsed"
               animate={index === expandIndex ? 'collapsed' : 'expanded'}>
               {name}
            </motion.h2>
            {/* <h3>Topic:{topic}</h3> */}
         </div>
      </motion.div>
   )
}

export default ExpandleCard

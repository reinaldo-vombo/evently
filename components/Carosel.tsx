'use client'

import { IEvent } from "@/interfaces/event"
import { animate, useMotionValue, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import useMeasure from "react-use-measure"
interface ICarosel {
   imageArry: IEvent[]
}

const Carosel = ({ imageArry }: ICarosel) => {
   const FAST_DURATIOPN = 25
   const SLOW_DURATION = 75

   const [duration, setDuration] = useState(FAST_DURATIOPN)
   const [mustFinish, setMustFinish] = useState(false)
   const [render, setRender] = useState(false)

   let [ref, { width }] = useMeasure()
   const xtranslation = useMotionValue(0)

   useEffect(() => {
      let controls
      let finalPosition = -width / 2 - 0

      if (mustFinish) {
         controls = animate(xtranslation, [xtranslation.get(), finalPosition], {
            ease: 'linear',
            duration: duration * (1 - xtranslation.get() / finalPosition),
            onComplete: () => {
               setMustFinish(false)
               setRender(!render)
            }
         })
      } else {
         controls = animate(xtranslation, [0, finalPosition], {
            ease: 'linear',
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
         })
      }

      return controls?.stop
   }, [xtranslation, width, duration, render])
   return (
      <>
         <motion.div
            className='absolute left-0 flex gap-4'
            ref={ref}
            style={{ x: xtranslation }}
            onMouseEnter={() => {
               setMustFinish(true)
               setDuration(SLOW_DURATION)
            }}
            onMouseLeave={() => {
               setMustFinish(true)
               setDuration(FAST_DURATIOPN)
            }}
         >
            {[...imageArry, ...imageArry].slice(1).map((item) => (
               <div className=''>
                  <Link href={`/eventos/${item.id}`}>
                  </Link>
                  <Image
                     src={item.image}
                     alt={item.title}
                     fill={true}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="object-cover w-full rounded-lg"
                  />

               </div>
            ))}
         </motion.div>
      </>
   )
}

export default Carosel
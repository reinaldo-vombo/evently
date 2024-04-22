import { siteConfig } from '@/config/siteConfig'
import React from 'react'
import CardEvent from '../shared/CardEvent'

const AllEvents = () => {
   return (
      <div className='grid grid-cols-12 content-center place-content-center gap-6'>
         {siteConfig.events.map((item) => (
            <CardEvent
               key={item.id}
               id={item.id}
               image={item.image}
               title={item.title}
            />
         ))}
      </div>
   )
}

export default AllEvents

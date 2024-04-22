'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import GuestCard from "../GuestCard"
import { IEvent } from "@/interfaces"
import MobileCard from "./MobileCard"
interface ISlider {
   events: IEvent[]
   showGuest: boolean
   width?: string
}


const EventSlider = ({ events, showGuest, width }: ISlider) => {
   // const [api, setApi] = useState<CarouselApi>()

   // useEffect(() => {
   //    if (!api) {
   //       return
   //    }

   //    api.on("select", () => {
   //       console.log('hrello');

   //    })
   // }, [api])

   return (
      <Carousel
         className={width ? width : 'w-full p-0'}>
         <CarouselContent className="-ml-1">
            {events.map((item, index) => (
               <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card className="border-none shadow-none">
                        <CardContent className="flex aspect-square items-center justify-center p-0 bg-[#141414]">
                           {showGuest ?
                              <GuestCard />
                              :
                              (
                                 <MobileCard
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                 />
                              )
                           }
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious className='bg-violet-500 hover:bg-violet-300 text-white' />
         <CarouselNext className='bg-violet-500 hover:bg-violet-300 text-white' />
      </Carousel>
   )
}

export default EventSlider

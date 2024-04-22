import Image from "next/image"
import { AspectRatio } from "../ui/aspect-ratio"
import { ICardEvent } from "@/interfaces"


const MobileCard = ({ image, title }: ICardEvent) => {
   return (
      <>
         <div className='size-64'>
            <AspectRatio ratio={1 / 1} className="bg-muted relative rounded-md isolation-auto card-layout">
               <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
               />
               <div className='absolute bottom-0 text-center w-full  p-1 z-10 text-white'>
                  <h3 className='body-medium'>{title}</h3>
               </div>
            </AspectRatio>
         </div>
      </>
   )
}

export default MobileCard

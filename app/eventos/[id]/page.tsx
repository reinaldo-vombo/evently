
import Gallery from "@/components/layout/Gallery";
import EventMap from "@/components/shared/EventMap";
import EventSlider from "@/components/shared/EventSlider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Icons } from "@/config/icons";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
interface IPageParam {
   params: { id: string }
}

export default function page({ params }: IPageParam) {
   const eventId = params.id
   const event = siteConfig.events.find((item) => item.id === eventId)
   const usersUrl = ['/avatar.jpg', '/avatar.jpg', '/avatar.jpg', '/avatar.jpg']
   const shouldRenderButton = usersUrl.length > 5

   if (!event) {
      return <h1>no events</h1>
   }
   return (
      <section className='space-y-5'>
         <div className='relative h-48 w-full'>
            <Image src={event.image} className='rounded-lg object-cover' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={event.title} />
         </div>
         <div className='space-y-4 text-secondary-foreground'>
            <h2 className='h2-bold'>{event.title}</h2>
            <div className='flex items-center justify-between'>
               <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-2 text-slate-500'>
                     <Icons.lock width={19} className='mb-1' />
                     <span>Evento Privado</span>
                     <b>600 membros</b>
                  </div>
                  <div className='flex items-center gap-2 text-slate-500'>
                     <Icons.calendar width={19} className='mb-1' />
                     <span>Oct 14,2024</span>
                     <span><b>Sábado</b> 10:00h - 12:30h</span>
                  </div>
                  <div className='flex -space-x-4 rtl:space-x-reverse'>
                     {usersUrl.map((user, index) => (
                        <Image src={user} className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800' key={index} width={460} height={460} alt='uses' />
                     ))}
                     {shouldRenderButton && <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>}
                  </div>
               </div>
               <div>
                  <div className='space-y-6'>
                     <div className='flex items-center gap-4'>
                        <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
                           <Icons.calendar className='text-white' width={20} />
                        </button>
                        <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
                           <Icons.bookmark className='text-white' width={20} />
                        </button>
                        <button type='button' className='rounded-full size-10 flex items-center justify-center bg-primary hover:bg-primary-foreground' aria-label='shared button'>
                           <Icons.link className='text-white' width={20} />
                        </button>
                        <Button type='button' className='bg-primary rounded-md hover:bg-primary-foreground text-white flex gap-2' aria-label='buy ticket'>
                           Ver bilhete
                        </Button>
                     </div>
                     <div className='flex items-center gap-2'>
                        <Image src='/avatar.jpg' className='rounded-full size-10' width={460} height={460} alt='user avatar' />
                        <span className='text-slate-500'>Organizado por</span>
                        <b>Reinaldo Vombo</b>
                     </div>
                  </div>
               </div>
            </div>
            <div className='grid gap-3'>
               <div className='w-full space-y-2'>
                  <h3 className='h3-bold'>Descrição</h3>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit dolorum consequatur, iste autem, quod recusandae sint harum deserunt, labore atque minima commodi vel quasi et excepturi fugiat a. Deserunt corrupti doloremque necessitatibus officia expedita quidem eligendi odit veniam eaque magnam veritatis aspernatur sint vel aliquid maiores, quis ratione enim soluta explicabo officiis ab nisi repellendus? Labore dolores repudiandae excepturi voluptatibus reiciendis facilis, laborum consectetur, voluptatem fuga sit quo recusandae mollitia, soluta repellat! Tempore corporis molestiae sunt distinctio ut voluptate optio dolor, nemo doloribus adipisci quidem, officia aliquid sapiente amet expedita excepturi quis enim voluptatem quos itaque voluptatum, qui animi.</p>
               </div>
               <div className='w-full space-y-2 text-white'>
                  <h3 className='h3-bold'>Visão do Mapa</h3>
                  <div className='bg-[#30363db3] rounded-md h-60'>
                     <div className='h-full relative'>
                        <EventMap />
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className='h3-bold'>Convidados</h3>
               <div className='flex items-center justify-center'>
                  <EventSlider
                     events={siteConfig.events}
                     showGuest={true}
                     width="w-[71%]"
                  />
               </div>
            </div>
            <Gallery />
            {/* <div className='space-y-5'>
               <h2 className='h3-bold'>Eventos Relacionados</h2>
               <div className='flex items-center justify-center'>
                  <EventSlider
                     events={siteConfig.events}
                     showGuest={false}
                     width="max-w-sm"
                  />

               </div>
            </div> */}
         </div>
      </section>
   )
}

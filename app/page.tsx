import Filter from "@/components/Filter";
import AllEvents from "@/components/layout/AllEvents";
import { Button } from "@/components/ui/button";
import { event1 } from "@/public";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='relative card-layout'>
        <div className='relative h-[330px] w-full'>
          <Image src={event1} className='rounded-lg object-cover' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='banner image' />
        </div>
        <div className='text-left absolute left-0 top-0 p-[.9rem] z-10 space-y-3'>
          <h2 className='h1-semibold'>Descobre, crie e vende <br /> seus eventos</h2>
          <div className='flex items-center gap-4'>
            <Button type="button" className='rounded-lg bg-violet-500'>Explorar</Button>
            <Button type="button" className='rounded-lg'>Criar Evento</Button>
          </div>
          {/* <p className='font-medium text-slate-500'>Um dia feliz com teus eventos favoritos</p> */}
        </div>
      </div>
      <Filter />
      <AllEvents />
    </>
  );
}

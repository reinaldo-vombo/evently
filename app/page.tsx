import Filter from "@/components/Filter";
import IncomeEvent from "@/components/IncomeEvent";
import AllEvents from "@/components/layout/AllEvents";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className='relative card-layout'>
        <IncomeEvent />
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

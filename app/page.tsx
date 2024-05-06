import Filter from "@/components/Filter";
import IncomeEvent from "@/components/IncomeEvent";
import AllEvents from "@/components/layout/AllEvents";

export default function Home() {
  return (
    <>
      <div className='relative card-layout'>
        <IncomeEvent />
      </div>
      <Filter />
      <AllEvents />
    </>
  );
}

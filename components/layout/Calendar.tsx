'use client'

import { useState } from "react";
import dayjs from 'dayjs';
import { siteConfig } from "@/config/siteConfig";
import classNames from 'classnames';
import { IEvent } from "@/interfaces/event";
interface Props {
   events: IEvent[];
}
const Calendar = () => {
   const [currentDate, setCurrentDate] = useState(dayjs());
   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);


   const daysInMonth = currentDate.daysInMonth();
   const firstDayOfMonth = currentDate.startOf('month').day();

   const getDay = (dayIndex: number) => {
      const date = dayjs(currentDate).startOf('month').add(dayIndex, 'day');
      const eventsForDay = siteConfig.events.filter(event => dayjs(event.date).isSame(date, 'day'));

      return (
         <div
            key={dayIndex}
            className={classNames(
               'border',
               'border-gray-300',
               'px-4',
               'py-2',
               'flex',
               'flex-col',
               'h-32',
               'overflow-y-auto',
               { 'bg-gray-100': date.isSame(dayjs(), 'day') }
            )}
         >
            <div className="font-bold">{date.format('D')}</div>
            <div>
               {eventsForDay.map(event => (
                  <div key={event.id} className="text-sm cursor-pointer" onClick={() => setSelectedEvent(event)}>
                     {event.title}
                  </div>
               ))}
            </div>
         </div>
      );
   };
   return (
      <div>
         <div className="flex justify-between items-center mb-4">
            <button onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}>{'<'}</button>
            <h2 className="text-xl font-bold">{currentDate.format('MMMM YYYY')}</h2>
            <button onClick={() => setCurrentDate(currentDate.add(1, 'month'))}>{'>'}</button>
         </div>
         <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
               <div key={index}></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => getDay(index))}
         </div>
         {selectedEvent && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                  <p className="text-sm">{dayjs(selectedEvent.date).format('MMMM D, YYYY')}</p>
                  <button className="mt-2" onClick={() => setSelectedEvent(null)}>Close</button>
               </div>
            </div>
         )}
      </div>
   );
}
export default Calendar

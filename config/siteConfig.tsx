import { event1, event2, event3, event4 } from "@/public";
import { Icons } from "./icons";

export const siteConfig = {
   menus: [
      {
         id: 1,
         label: 'Minha conta',
         route: '/',
         icon: <Icons.userIcon width={30} />
      },
      {
         id: 2,
         label: 'Explore',
         route: '/explore',
         icon: <Icons.star width={30} />
      },
      {
         id: 3,
         label: 'Meus favoritos',
         route: '/criar_evento',
         icon: <Icons.bookmark width={30} />
      },
      {
         id: 4,
         label: 'Calendario',
         route: '/calendario',
         icon: <Icons.calendar width={30} />
      },
   ],
   categorys: [
      { name: 'Festa', icon: <Icons.media width={30} className='text-black' /> },
      { name: 'Network', icon: <Icons.cpuChip width={30} className='text-black' /> },
      { name: 'Corporativos', icon: <Icons.building width={30} className='text-black' /> },
      { name: 'Acadêmicos', icon: <Icons.bookOpen width={30} className='text-black' /> },
   ],
   timeRage: [
      { name: 'Brevemente', value: 'brevemente' },
      { name: 'Recentes', value: 'recentes' },
   ],
   events: [
      {
         id: 'take-the-second-single-to-be-taken-from-coldplay',
         title: "Take the second single to be taken from coldplay's",
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam voluptate obcaecati atque iure iusto ea quae? Quibusdam dolor fugit inventore beatae quo. Sint neque nulla distinctio, consequatur facilis saepe?',
         owner: 'Reinado Vombo',
         image: event1,
         date: '15/03/2024',
      },
      {
         id: 'trafic-the-world-largest-concert-of-2024!',
         title: "TRAFIC, the world largest's concert of 2024!",
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam voluptate obcaecati atque iure iusto ea quae? Quibusdam dolor fugit inventore beatae quo. Sint neque nulla distinctio, consequatur facilis saepe?',
         owner: 'Reinado Vombo',
         image: event2,
         date: '15/03/2024',

      },
      {
         id: 'girl-please-tell-me-way',
         title: "Girl please tell me way",
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam voluptate obcaecati atque iure iusto ea quae? Quibusdam dolor fugit inventore beatae quo. Sint neque nulla distinctio, consequatur facilis saepe?',
         image: event3,
         date: '15/03/2024',
         owner: 'Reinado Vombo',
      },
      {
         id: 'trafic-the-worlds-largest-wildlife-trade',
         title: "TRAFIC, the world's largest wildlife trade",
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam voluptate obcaecati atque iure iusto ea quae? Quibusdam dolor fugit inventore beatae quo. Sint neque nulla distinctio, consequatur facilis saepe?',
         image: event4,
         owner: 'Reinado Vombo',
         date: '15/03/2024',
      },
   ],

}
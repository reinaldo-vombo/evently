import { StaticImageData } from 'next/image';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  owner: string;
  image: StaticImageData;
  date: string;
}
export interface ICardEvent {
  id: string;
  image: StaticImageData;
  title: string;
}

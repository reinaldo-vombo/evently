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
export interface IEventCard {
  id: string;
  image: StaticImageData;
  title: string;
  data: string;
  classame?: string;
  isContentInside: boolean;
  showSharedInfo: boolean;
  shared?: number;
}
interface ICategory {
  name: string;
  value: string;
}
export interface IFilter {
  placeholder: string;
  filters: ICategory[];
}

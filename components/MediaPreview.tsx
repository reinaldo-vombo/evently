'use client'
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import NoImageSeleted from "./messages/NoImageSeleted";

interface IMediaPreview {
  event: {
    _id: string;
    name: string;
    photo: StaticImageData;
    role: string;
  }[]
  title: string
  description?: string
  previewWithDescription: boolean
}
interface IImageProps {
  image: StaticImageData,
  title?: string
  index: number
}

const MediaPreview = ({ event, title, description, previewWithDescription }: IMediaPreview) => {
  const [seleted, setSelected] = useState<null | IImageProps>(null)
  const showPreview = (image: StaticImageData, index: number, title?: string,) => {
    setSelected({
      image,
      title,
      index
    })
  }

  return (
    <div className='space-y-4'>
      <h2 className='h3-bold'>Convidados</h2>
      <div className='grid grid-cols-12'>
        {previewWithDescription ? (
          <>
            <div className='col-span-7'>
              {/* <div className='relative' key={index}>
                <Image src={seleted} fill alt={title} />
              </div> */}
            </div>
            <div className='col-span-5'></div>
          </>
        ) : (
          <div className='col-span-12'>
            <div className='relative h-72'>
              {seleted === null ? (
                <NoImageSeleted />
              ) : (
                <Image src={seleted.image} className='rounded-lg object-cover' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={seleted?.title ? seleted.title : ''} />
              )}
            </div>
          </div>
        )}
      </div>
      <div className='flex items-center justify-center gap-4'>
        {event.map((item, index) => (
          <button type='button' className='relative size-40' key={index} onClick={() => showPreview(item.photo, index)} aria-label="event image">
            <Image src={item.photo} className={`w-full h-full rounded-lg object-cover ${seleted?.index === index ? 'border border-primary rounded-lg' : ''}`} fill alt={title} />
          </button>
        ))}
      </div>

    </div>
  )
}

export default MediaPreview

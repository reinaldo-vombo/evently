'use client'
import { LatLngExpression } from 'leaflet'
import { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'

interface IEventMap {
   classMame?: string
   zoom?: number
   position?: number[] | LatLngExpression
}

const EventMap = ({ classMame }: IEventMap) => {

   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   const position: LatLngExpression = [-8.8992119, 13.1905541]
   const handleLoad = () => {
      setLoading(false);
   };

   const handleError = () => {
      setLoading(false);
      setError(true);
   };

   return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={position}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
      </MapContainer>
   )
}

export default EventMap

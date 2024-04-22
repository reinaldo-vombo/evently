'use client'
import { LatLngExpression } from 'leaflet'
import { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'

interface IEventMap {
   classMame?: string
   zoom?: number
   position?: number[] | LatLngExpression
   width: string
   height: string
}

const EventMap = ({ classMame, height, width }: IEventMap) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   const position: LatLngExpression = [-8.8735744, 13.254656]
   const handleLoad = () => {
      setLoading(false);
   };

   const handleError = () => {
      setLoading(false);
      setError(true);
   };
   return (
      <MapContainer className={classMame} center={position} zoom={13} scrollWheelZoom={false} style={{ height: height, width: width }} whenReady={handleError}>
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

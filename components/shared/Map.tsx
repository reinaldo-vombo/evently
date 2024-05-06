import { LatLng, LatLngExpression } from 'leaflet'
import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

const Map = () => {
   function LocationMarker() {
      const [position, setPosition] = useState<null | LatLng>(null)
      const map = useMapEvents({
         click() {
            map.locate()
         },
         locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
         },
      })

      return position === null ? null : (
         <Marker position={position}>
            <Popup>You are here</Popup>
         </Marker>
      )
   }
   const position: LatLngExpression = [-8.8992119, 13.1905541]
   return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <LocationMarker />
         <Marker position={position}>
            <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
         </Marker>
      </MapContainer>
   )
}

export default Map

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./compStyles/map.css";

function Map() {
  const markers = [
    {
      geocode: [-25.4787408, -54.5604972],
      popUp: (
        <>
          <h1>Contrato x</h1>
          <h2>Status:</h2>
          Paralisado
        </>
      ),
    },
  ];

  return (
    <MapContainer center={[-25.5185323, -54.5467007]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenstreetMap</a> contributors '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

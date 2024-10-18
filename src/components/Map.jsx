import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./compStyles/map.css";

function Map({ contratos }) {
  const defaultFocus = [-25.5185323, -54.5467007];
  const defaultZoom = 13;
  const [focus, setFocus] = React.useState(defaultFocus);
  const [zoom, setZoom] = React.useState(defaultZoom);

  return (
    <MapContainer center={focus} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenstreetMap</a> contributors '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {contratos.map((contrato, index) => (
        <Marker key={index} position={[contrato.cordx, contrato.cordy]}>
          <Popup>
            <div>
              <h3>{contrato.nome}</h3>
              <p>{contrato.contratante}</p>
              <p>{contrato.tipoContrato}</p>
              <p>Progresso: {contrato.progresso}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

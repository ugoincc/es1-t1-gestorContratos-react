import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./compStyles/map.css";

function SetViewOnClick({ coordenadas, zoom }) {
  const map = useMap();
  if (coordenadas) {
    map.setView(coordenadas, zoom);
  }
  return null;
}

function Map({ contratos, coordenadas }) {
  const defaultFocus = [-25.5185323, -54.5467007];
  const defaultZoom = 13;

  const [focus, setFocus] = React.useState(defaultFocus);
  const [zoom, setZoom] = React.useState(defaultZoom);

  React.useEffect(() => {
    if (coordenadas) {
      setFocus(coordenadas);
      setZoom(20);
    }
  }, [coordenadas]);

  const contratosArray = Array.isArray(contratos) ? contratos : [];

  return (
    <MapContainer
      center={focus}
      zoom={zoom}
      style={{ height: "83vh", width: "70%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenstreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {contratosArray.map((contrato, index) => (
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

      <SetViewOnClick coordenadas={focus} zoom={zoom} />
    </MapContainer>
  );
}

export default Map;

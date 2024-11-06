import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./compStyles/map.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const center = {
  lat: -25.5146897,
  lng: -54.5560844,
};

function DraggableMarker({ onPositionChange }) {
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const latLng = marker.getLatLng();
          const newPosition = [latLng.lat, latLng.lng];
          setPosition(latLng);
          onPositionChange(newPosition);
        }
      },
    }),
    [onPositionChange]
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    ></Marker>
  );
}

function SetViewOnClick({ coordenadas, zoom }) {
  const map = useMap();
  if (coordenadas) {
    map.setView(coordenadas, zoom);
  }
  return null;
}

function Map({ contratos, coordenadas, showDraggable, onPositionChange }) {
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

      {showDraggable ? (
        <DraggableMarker onPositionChange={onPositionChange} />
      ) : null}

      <MarkerClusterGroup>
        {contratosArray.map((contrato, index) => (
          <Marker key={index} position={[contrato.cordx, contrato.cordy]}>
            <Popup>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fafafa",
                  mb: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {contrato.objeto}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Entrega / Serviço:</strong>{" "}
                  {contrato.entregasServicos}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Contratante:</strong> {contrato.contratante}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Tipo de Contrato:</strong> {contrato.tipoContrato}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Progresso:</strong> {contrato.statusExecucao}
                </Typography>
              </Box>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <SetViewOnClick coordenadas={focus} zoom={zoom} />
    </MapContainer>
  );
}

export default Map;

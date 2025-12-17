"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/assets/img/marker-icon-2x.png",
  iconUrl: "/assets/img/marker-icon.png",
  shadowUrl: "/assets/img/marker-shadow.png",
});

const OfficeMap = () => {
  // Replace these coordinates with your office
  const position = [23.8103, 90.4125]; // Dhaka example

  return (
    <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>Our Office Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OfficeMap;

import "./maps.css";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

export default function App() {
    return (
        <MapContainer center={[-0.9247883992009672, 100.41795467310912]} zoom={9}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

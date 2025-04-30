import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder'; // Correct import for leaflet-control-geocoder
import L from 'leaflet';
import { useMap } from 'react-leaflet';

function Map() {
  return (
    <section id="map" className="section">
      <h2>Map Feature</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapWithGeocoder />
      </MapContainer>
    </section>
  );
}

// Component that adds the geocoder and markers to the map
function MapWithGeocoder() {
  const map = useMap(); // Now this is within MapContainer

  useEffect(() => {
    // Adding geocoder (search) control to the map
    L.Control.geocoder({
      defaultMarkGeocode: true
    }).addTo(map); // Directly adding geocoder without assigning it to a variable

    // You can add your marker and other map elements here
    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.');

  }, [map]);

  return null; // This component does not render anything on its own
}

export default Map;

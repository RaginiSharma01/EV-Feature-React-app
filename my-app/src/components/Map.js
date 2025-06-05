import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import './Map.css'; // Our custom CSS file

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Map() {
  return (
    <section className="map-container">
      <div className="map-header">
        <h2>Interactive Map</h2>
        <div className="map-controls">
          <button className="map-btn">Legend</button>
          <button className="map-btn">Layers</button>
        </div>
      </div>
      
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapControls />
      </MapContainer>
    </section>
  );
}

function MapControls() {
  const map = useMap();

  useEffect(() => {
    // Initialize geocoder
    const geocoder = new Geocoder({
      defaultMarkGeocode: true,
      position: 'topleft',
      placeholder: 'Search location...',
      geocoder: new Geocoder.Nominatim(),
      collapsed: false,
    }).addTo(map);

    // Add default marker
    const marker = L.marker([51.505, -0.09]).addTo(map);
    marker.bindPopup('<b>Welcome!</b><br>This is your starting point.');

    // Add scale control
    L.control.scale({ position: 'bottomleft' }).addTo(map);

    return () => {
      // Cleanup
      map.removeControl(geocoder);
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
    };
  }, [map]);

  return null;
}

export default Map;
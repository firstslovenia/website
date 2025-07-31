// src/components/MapView.jsx
import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'leaflet/dist/leaflet.css';

function InnerMap({ center, zoom, markers, size=["400px", "600px"] }) {
  useEffect(() => {
    (async () => {
      const L = await import('leaflet');
      const iconUrl = (await import('leaflet/dist/images/marker-icon.png')).default;
      const shadowUrl = (await import('leaflet/dist/images/marker-shadow.png')).default;

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({ iconUrl, shadowUrl });

      const map = L.map('map').setView(center, zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      markers.forEach(([lat, lng, popup]) => {
        L.marker([lat, lng]).addTo(map).bindPopup(popup || '');
      });
    })();
  }, [center, zoom, markers]);

return (
  <div
    id="map"
    style={{
      height: size[0],
      width: size[1],       // ✅ Prevents overflow
      borderRadius: '8px',
      margin: '1rem auto',     // ✅ Center it and separate from other content
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)', // Optional: nicer look
    }}
  />
);
}

export default function MapView({
  center = [51.505, -0.09],
  zoom = 13,
  markers = [[51.505, -0.09, 'Default Marker']],
  size = ["400px", "600px"], // Default size
}) {
  return (
    <BrowserOnly fallback={<div>Loading map...</div>}>
      {() => <InnerMap center={center} zoom={zoom} markers={markers} size={size}/>}
    </BrowserOnly>
  );
}

// src/pages/map.jsx
import React from 'react';
import MapView from '@site/src/components/MapView';

export default function MapPage() {
  return (
    <div>
      <h1>My OSM Map</h1>
      <MapView
        center={[40.7128, -74.006]}
        zoom={12}
        markers={[
          [40.7128, -74.006, 'New York City'],
          [40.73061, -73.935242, 'Another Marker'],
        ]}
      />
    </div>
  );
}

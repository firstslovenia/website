import React, { useState, useEffect } from "react";
import styles from "./MapView.module.css";
import "leaflet/dist/leaflet.css";

const iconUrl = "/marker-icon.png";
const shadowUrl = "/marker-shadow.png";

type MapComponents = typeof import("react-leaflet") & {
  Icon: typeof import("leaflet").Icon;
};

export default function MapView({
  center = [51.505, -0.09],
  zoom = 13,
  markers = [[51.505, -0.09, "Default Marker"]],
  size = ["400px", "600px"], // Default size
}: {
  center?: [number, number];
  zoom?: number;
  markers?: [number, number, string][];
  size?: [string, string];
}) {
  const [MapComponents, setMapComponents] =
    useState<Partial<MapComponents>>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [height, width] = size;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadMapComponents = async () => {
        try {
          const [reactLeaflet, leaflet] = await Promise.all([
            import("react-leaflet"),
            import("leaflet"),
          ]);

          const { MapContainer, TileLayer, Marker, Popup } = reactLeaflet;
          const { Icon } = leaflet;

          setMapComponents({
            MapContainer,
            TileLayer,
            Marker,
            Popup,
            Icon,
          });
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      };

      loadMapComponents();
    }
  }, []);

  if (isLoading) {
    return (
      <div className={styles.mapLoading} style={{ height, width }}>
        Loading map...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.mapError} style={{ height, width }}>
        Error loading map: {error}
      </div>
    );
  }

  if (!MapComponents) {
    return (
      <div className={styles.mapUnavailable} style={{ height, width }}>
        Map not available
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, Icon } = MapComponents;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height, width }}
      className={styles.mapView}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map(([lat, lng, popup], index) => (
        <Marker
          position={[lat, lng]}
          key={`${lat}-${lng}-${index}`}
          icon={
            new Icon({
              iconUrl,
              shadowUrl,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>{popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

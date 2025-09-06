import React from "react";
import CountdownEventCard from "@site/src/components/CountdownEventCard";

export default function EventPage() {
  return (
    <CountdownEventCard
      title="FIRST Globall Challenge 2025"
      location="Panama Convention Center, Calle Gral. Juan D. Peron, Panamá, Provincia de Panamá, Panama"
      displayLocation="Panama City, Panama"
      startTime={new Date("2025-10-28T08:00:00-05:00")}
      endTime={new Date("2025-11-01T18:00:00-05:00")}
      coordinates={[8.937667562878083, -79.54777780016597]} // https://xkcd.com/2170
    />
  );
}

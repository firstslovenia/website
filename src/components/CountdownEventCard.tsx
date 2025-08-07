import React, { useEffect, useState, useRef } from "react";
import { translate } from "@docusaurus/Translate";
import MapView from "@site/src/components/MapView";
import styles from "./CountdownEventCard.module.css";
import { motion, AnimatePresence } from "framer-motion";

const SlidingNumbers: React.FC<{
  value: number;
  color: string;
  digits?: number;
}> = ({ value, color, digits = 2 }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setCurrentValue(value);
    }
  }, [value]);

  const hasChanged = prevValueRef.current !== value;

  const formattedValue = currentValue.toString().padStart(digits, "0");

  return (
    <div className={styles.numbersContainer} style={{ color }}>
      {hasChanged ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentValue}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            {formattedValue}
          </motion.div>
        </AnimatePresence>
      ) : (
        formattedValue
      )}
    </div>
  );
};

type CountdownEventCardProps = {
  title: string;
  location: string;
  displayLocation: string;
  startTime: Date;
  endTime: Date;
  coordinates: [number, number];
};

const TimeUnit: React.FC<{
  label: string;
  value: number;
  color: string;
}> = ({ label, value, color }) => (
  <div className={styles.timeUnit}>
    <div className={styles.timeValue}>
      <SlidingNumbers value={value} color={color} />
    </div>
    <small className={styles.timeLabel}>{label}</small>
  </div>
);

const CountdownEventCard: React.FC<CountdownEventCardProps> = ({
  title,
  location,
  displayLocation,
  startTime,
  endTime,
  coordinates,
}) => {
  const [timeParts, setTimeParts] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [eventStatus, setEventStatus] = useState<
    "upcoming" | "ongoing" | "ended"
  >("upcoming");

  const getStatusColor = (status: typeof eventStatus) => {
    switch (status) {
      case "upcoming":
        return "var(--ifm-color-primary)";
      case "ongoing":
        return "#cfcf0d";
      case "ended":
        return "#b31919";
      default:
        return "var(--ifm-color-primary)";
    }
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const startDistance = startTime.getTime() - now;
      const endDistance = endTime.getTime() - now;

      let distance: number;
      let status: typeof eventStatus;

      if (endDistance < 0) {
        // Event has ended
        distance = Math.abs(endDistance);
        status = "ended";
      } else if (startDistance <= 0) {
        // Event is ongoing
        distance = endDistance;
        status = "ongoing";
      } else {
        // Event is upcoming
        distance = startDistance;
        status = "upcoming";
      }

      setEventStatus(status);

      const newParts = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };

      setTimeParts(newParts);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const formatDate = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title,
  )}&dates=${formatDate(startTime)}/${formatDate(
    endTime,
  )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

  const statusColor = getStatusColor(eventStatus);

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.outerContainer}>
        <div className={styles.top}>
          <div className={styles.leftSide}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.location}>{displayLocation}</div>

            <div className={styles.countdownContainer}>
              <TimeUnit
                label={translate({ id: "ctd.days", message: "Days" })}
                value={timeParts.days}
                color={statusColor}
              />
              <TimeUnit
                label={translate({ id: "ctd.hours", message: "Hours" })}
                value={timeParts.hours}
                color={statusColor}
              />
              <TimeUnit
                label={translate({ id: "ctd.minutes", message: "Minutes" })}
                value={timeParts.minutes}
                color={statusColor}
              />
              <TimeUnit
                label={translate({ id: "ctd.seconds", message: "Seconds" })}
                value={timeParts.seconds}
                color={statusColor}
              />
            </div>
          </div>

          <div className={styles.rightSide}>
            <MapView
              center={coordinates}
              zoom={12}
              markers={[[...coordinates, displayLocation]]}
              size={["220px", "100%"]}
            />
          </div>
        </div>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.calendarLinkContainer}
        >
          <button className={styles.calendarButton}>
            {translate({
              id: "ctd.add-to-calendar",
              message: "Add to calendar",
            })}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CountdownEventCard;

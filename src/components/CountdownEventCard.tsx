import React, { useEffect, useState, useRef } from 'react';
import { translate } from '@docusaurus/Translate';
import MapView from '@site/src/components/MapView';

// Add keyframes animation for glow effect
if (typeof document !== 'undefined') {
	const style = document.createElement('style');
	style.innerHTML = `
	@keyframes glow {
		0% { text-shadow: 0 0 0px var(--ifm-color-primary); }
		50% { text-shadow: 0 0 10px var(--ifm-color-primary); }
		100% { text-shadow: 0 0 0px var(--ifm-color-primary); }
	}
	`;
	document.head.appendChild(style);
}

type CountdownEventCardProps = {
	title: string;
	location: string;
	displayLocation: string;
	startTime: Date;
	endTime: Date;
	coordinates: [number, number];
};

const CountdownEventCard: React.FC<CountdownEventCardProps> = ({
	title,
	location,
	displayLocation,
	startTime,
	endTime,
	coordinates,
}) => {
	const [timeParts, setTimeParts] = useState({
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
	});

	const [changed, setChanged] = useState({
		days: false,
		hours: false,
		minutes: false,
		seconds: false,
	});

	const [color, setColor] = useState('var(--ifm-color-primary)');

	const prevTimeRef = useRef(timeParts);

	useEffect(() => {
		const updateCountdown = () => {
			const now = new Date().getTime();
			const startDistance = startTime.getTime() - now;
			const endDistance = endTime.getTime() - now;

			let distance = startDistance;

			if (startDistance <= 0 && endDistance >= 0) {
				setColor('#cfcf0d');
			} else if (endDistance < 0) {
				distance = endDistance;
				setColor('#b31919');
			}

			distance = Math.abs(distance);

			const newParts = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString(),
				hours: Math.floor((distance / (1000 * 60 * 60)) % 24).toString(),
				minutes: Math.floor((distance / (1000 * 60)) % 60).toString(),
				seconds: Math.floor((distance / 1000) % 60).toString(),
			};

			setChanged({
				days: prevTimeRef.current.days !== newParts.days,
				hours: prevTimeRef.current.hours !== newParts.hours,
				minutes: prevTimeRef.current.minutes !== newParts.minutes,
				seconds: prevTimeRef.current.seconds !== newParts.seconds,
			});

			prevTimeRef.current = newParts;
			setTimeParts(newParts);
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	}, [startTime, endTime]);

	const formatDate = (date: Date) =>
		date.toISOString().replace(/-|:|\.\d\d\d/g, '');

	const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
		title
	)}&dates=${formatDate(startTime)}/${formatDate(
		endTime
	)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

	const TimeUnit = ({ label, value, glow, color}: { label: string; value: string; glow: boolean, color: string}) => (
		<div style={{ textAlign: 'center', margin: '0 0.5rem' }}>
			<div
				style={{
					fontSize: '3rem',
					fontWeight: 'bold',
					color: color,
					animation: glow ? 'glow 0.5s ease-in-out' : 'none',
				}}
			>
				{value}
			</div>
			<small>{label}</small>
		</div>
	);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-start',
				justifyContent: 'space-between',
				border: '1px solid #ccc',
				borderRadius: '1rem',
				padding: '1rem',
				boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
				minWidth: '900px',
				maxWidth: '970px',
				margin: '2rem auto',
				flexWrap: 'nowrap',
				gap: '1rem',
			}}
		>
			{/* Left side */}
			<div style={{ flex: '1 1 60%', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
				<div style={{ marginBottom: '0.5rem' }}>
					<h1 style={{ margin: 0 }}>{title}</h1>
				</div>

				<div style={{ marginBottom: '0.5rem' }}>
					{displayLocation}
				</div>


				<div
					style={{
						display: 'flex',
						justifySelf: 'center',
						alignItems: 'center',
						alignSelf: 'flex-start',
						gap: '1rem',
						marginTop: '1rem',
					}}
				>
					<TimeUnit label={translate({id:"ctd.days", message: "Days"})} value={timeParts.days} glow={changed.days} color={color} />
					<TimeUnit label={translate({id:"ctd.hours", message: "Hours"})} value={timeParts.hours} glow={changed.hours} color={color} />
					<TimeUnit label={translate({id:"ctd.minutes", message: "Minutes"})} value={timeParts.minutes} glow={changed.minutes} color={color} />
					<TimeUnit label={translate({id:"ctd.seconds", message: "Seconds"})} value={timeParts.seconds} glow={changed.seconds} color={color} />
				</div>
			</div>

			{/* Right side: map */}
			<div
				style={{
					// width: '250px',
					// height: '180px',
					borderRadius: '0.5rem',
					overflow: 'hidden',
					flexShrink: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'right',
					justifyContent: 'right',
				}}
			>
				<a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer"
				style={{
					display: 'flex',
					justifyContent: 'right',
				}}>
					<button
						style={{
							padding: '0.4rem 0.8rem',
							borderRadius: '0.5rem',
							border: 'none',
							backgroundColor: 'var(--ifm-color-primary)',
							color: '#fff',
							cursor: 'pointer',
							fontSize: '0.9rem',
						}}
						dangerouslySetInnerHTML={{ __html: translate({id:"ctd.add-to-calendar", message: "Add to calendar"}) }}
					/>
				</a>
				<MapView
					center={coordinates}
					zoom={12}
					markers={[[...coordinates, displayLocation]]}
					size={["220px", "350px"]}
				/>
			</div>
		</div>
	);
};

export default CountdownEventCard;

import { useEffect, useRef, useState, type ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import StatsRow from "@site/src/components/StatsRow";
import { useFirstSloveniaStats } from "@site/src/components/stats";

import styles from "./testimonials.module.css";

type Profile = {
	name: string;
	programs: string;
	image: string;
	pdf: string;
	preview: string;
};

const profiles: Profile[] = [
	{
		name: "Luka Maček",
		programs: "FGC · Mentor",
		image: "/img/testimonials/luka-macek.jpg",
		pdf: "/files/testimonials/Luka-Macek.pdf",
		preview: "/img/testimonials/previews/Luka-Macek.jpg",
	},
	{
		name: "David Zindović",
		programs: "FGC · Mentor",
		image: "/img/testimonials/david-zindovic.jpg",
		pdf: "/files/testimonials/David-Zindovic.pdf",
		preview: "/img/testimonials/previews/David-Zindovic.jpg",
	},
	{
		name: "Jaka Kovač",
		programs: "FLL · FTC · FGC · Mentor",
		image: "/img/testimonials/jaka-kovac.jpg",
		pdf: "/files/testimonials/jaka-kovac.pdf",
		preview: "/img/testimonials/previews/jaka-kovac.jpg",
	},
	{
		name: "David Turk",
		programs: "FTC · FGC · Mentor",
		image: "/img/testimonials/david-turk.jpg",
		pdf: "/files/testimonials/David-Turk.pdf",
		preview: "/img/testimonials/previews/David-Turk.jpg",
	},
		{
		name: "Gabrijel Steiner",
		programs: "FTC · FGC",
		image: "/img/testimonials/gabrijel-steiner.jpg",
		pdf: "/files/testimonials/gabrijel-steiner.pdf",
		preview: "/img/testimonials/previews/gabrijel-steiner.jpg",
	},
	{
		name: "Ana Ločnikar",
		programs: "FTC · FGC",
		image: "/img/testimonials/ana-locnikar.jpg",
		pdf: "/files/testimonials/ana-locnikar.pdf",
		preview: "/img/testimonials/previews/ana-locnikar.jpg",
	},
	{
		name: "Vid Furlan",
		programs: "FTC · FGC",
		image: "/img/testimonials/vid-furlan.JPG",
		pdf: "/files/testimonials/Vid-Furlan.pdf",
		preview: "/img/testimonials/previews/Vid-Furlan.jpg",
	},
	{
		name: "Jurij Fortuna",
		programs: "FLL · FTC · FGC",
		image: "/img/testimonials/jurij-fortuna.JPG",
		pdf: "/files/testimonials/Jurij-Fortuna.pdf",
		preview: "/img/testimonials/previews/Jurij-Fortuna.jpg",
	},
	{
		name: "Alja Sterle",
		programs: "FTC · FGC",
		image: "/img/testimonials/alja-sterle.jpg",
		pdf: "/files/testimonials/Alja-Sterle.pdf",
		preview: "/img/testimonials/previews/Alja-Sterle.jpg",
	},
	{
		name: "Domen Podgoršek",
		programs: "FTC · FGC",
		image: "/img/testimonials/domen-podgorsek.jpg",
		pdf: "/files/testimonials/Domen-Podgorsek.pdf",
		preview: "/img/testimonials/previews/Domen-Podgorsek.jpg",
	},
	{
		name: "Nejc Furlan",
		programs: "FTC · FGC",
		image: "/img/testimonials/nejc-furlan.jpg",
		pdf: "/files/testimonials/Nejc-Furlan.pdf",
		preview: "/img/testimonials/previews/Nejc-Furlan.jpg",
	},
	{
		name: "Iztok Merljak",
		programs: "FTC · FGC",
		image: "/img/testimonials/iztok-merljak.jpg",
		pdf: "/files/testimonials/Iztok-Merljak.pdf",
		preview: "/img/testimonials/previews/Iztok-Merljak.jpg",
	},
	{
		name: "Natan Jurca",
		programs: "FTC · FGC",
		image: "/img/testimonials/natan-jurca.jpg",
		pdf: "/files/testimonials/Natan-Jurca.pdf",
		preview: "/img/testimonials/previews/Natan-Jurca.jpg",
	},
	{
		name: "Ema Šker",
		programs: "FTC",
		image: "/img/testimonials/ema-skerl.jpg",
		pdf: "/files/testimonials/Ema-Skerl.pdf",
		preview: "/img/testimonials/previews/Ema-Skerl.jpg",
	},
	{
		name: "Simon Lipovšek",
		programs: "FGC",
		image: "/img/testimonials/simon-lipovsek.jpg",
		pdf: "/files/testimonials/Simon-Lipovsek.pdf",
		preview: "/img/testimonials/previews/Simon-Lipovsek.jpg",
	},
	{
		name: "Jakob Tadej Vrtačnik",
		programs: "FTC",
		image: "/img/testimonials/jakob-tadej-vrtacnik.jpg",
		pdf: "/files/testimonials/Jakob-Tadej-Vrtacnik.pdf",
		preview: "/img/testimonials/previews/Jakob-Tadej-Vrtacnik.jpg",
	},
	{
		name: "Jonas Korene Novak",
		programs: "FTC",
		image: "/img/testimonials/jonas-korene-novak.jpg",
		pdf: "/files/testimonials/Jonas-Korene-Novak.pdf",
		preview: "/img/testimonials/previews/Jonas-Korene-Novak.jpg",
	},
	
	//od tuki naprej brez storyjev
	{
		name: "Tia Udovičić",
		programs: "FGC",
		image: "/img/testimonials/tia-udovicic.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Luca Borg",
		programs: "FTC · FGC",
		image: "/img/testimonials/luca-borg.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Lio Fideršek",
		programs: "FGC",
		image: "/img/testimonials/lio-fidersek.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Janez Grad",
		programs: "FGC",
		image: "/img/testimonials/janez-grad.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Brina Smolej",
		programs: "FGC",
		image: "/img/testimonials/brina-smolej.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Matic Ažman",
		programs: "FGC",
		image: "/img/testimonials/matic-azman.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Gaja",
		programs: "FGC",
		image: "/img/testimonials/gaja.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Uroš Anže Tomažič",
		programs: "FGC",
		image: "/img/testimonials/uros-anze-tomazic.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Žiga Kralj",
		programs: "FGC",
		image: "/img/testimonials/ziga-kralj.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Klemen Mehle",
		programs: "FGC",
		image: "/img/testimonials/klemen-mehle.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Matej Šajn",
		programs: "FGC",
		image: "/img/testimonials/matej-sajn.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Andrei Morozov",
		programs: "FGC",
		image: "/img/testimonials/andrej-morozov.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Nail Kuduzović",
		programs: "FGC",
		image: "/img/testimonials/nail-kuduzovic.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Mark Breznik",
		programs: "FGC · Mentor",
		image: "/img/testimonials/mark-breznik.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Boštjan Čampelj",
		programs: "FGC",
		image: "/img/testimonials/bostjan-campelj.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "Kristina Kit",
		programs: "FGC",
		image: "/img/testimonials/kristina-kit.jpg",
		pdf: "",
		preview: "",
	},
	{
		name: "David Kraševec",
		programs: "FGC",
		image: "/img/testimonials/david-krasevec.jpg",
		pdf: "",
		preview: "",
	},

];

/* Caps the grid's width so the cards wrap into evenly filled rows
   (e.g. 6 cards become 3+3 instead of 5+1) at any viewport size */
function useBalancedGridWidth(itemCount: number) {
	const ref = useRef<HTMLDivElement>(null);
	const [maxWidth, setMaxWidth] = useState<number>();

	useEffect(() => {
		const grid = ref.current;
		const parent = grid?.parentElement;
		if (!grid || !parent || itemCount === 0) {
			return;
		}

		const update = () => {
			const item = grid.firstElementChild as HTMLElement | null;
			if (!item) {
				return;
			}
			const available = parent.clientWidth;
			const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
			const itemWidth = item.offsetWidth;
			const maxCols = Math.max(
				1,
				Math.floor((available + gap) / (itemWidth + gap)),
			);
			const rows = Math.ceil(itemCount / maxCols);
			const cols = Math.ceil(itemCount / rows);
			setMaxWidth(cols * itemWidth + (cols - 1) * gap);
		};

		update();
		const observer = new ResizeObserver(update);
		observer.observe(parent);
		return () => observer.disconnect();
	}, [itemCount]);

	return { ref, maxWidth };
}

function ProfileCircle({
	profile,
	onOpen,
}: {
	profile: Profile;
	onOpen: (profile: Profile) => void;
}): ReactNode {
	const image = useBaseUrl(profile.image);
	const pdf = useBaseUrl(profile.pdf);
	return (
		<a
			className={styles.profile}
			href={pdf}
			onClick={(event) => {
				event.preventDefault();
				onOpen(profile);
			}}
			title={translate({
				id: "testimonials.openProfile",
				message: "Open profile (PDF)",
			})}
		>
			<img src={image} alt={profile.name} className={styles.avatar} />
			<span className={styles.name}>{profile.name}</span>
			<span className={styles.programs}>{profile.programs}</span>
		</a>
	);
}

function PdfModal({
	profile,
	onClose,
}: {
	profile: Profile;
	onClose: () => void;
}): ReactNode {
	const pdf = useBaseUrl(profile.pdf);
	const preview = useBaseUrl(profile.preview);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onClose]);

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={styles.modal}
				onClick={(event) => event.stopPropagation()}
			>
				<div className={styles.modalHeader}>
					<span className={styles.modalTitle}>{profile.name}</span>
					<a href={pdf} target="_blank" rel="noopener noreferrer">
						{translate({
							id: "testimonials.openInNewTab",
							message: "Open in a new tab",
						})}
					</a>
					<button
						className={styles.modalClose}
						onClick={onClose}
						aria-label={translate({
							id: "testimonials.close",
							message: "Close",
						})}
					>
						×
					</button>
				</div>
				{/* The story is shown as a pre-rendered image because mobile
				    browsers download PDFs instead of displaying them inline */}
				<div className={styles.previewScroll}>
					<img
						src={preview}
						alt={profile.name}
						className={styles.previewImage}
					/>
				</div>
			</div>
		</div>
	);
}

export default function Testimonials(): ReactNode {
	const [openProfile, setOpenProfile] = useState<Profile | null>(null);
	const stats = useFirstSloveniaStats();
	const grid = useBalancedGridWidth(profiles.length);

	return (
		<Layout
			title={translate({
				id: "testimonials.title",
				message: "Testimonials",
			})}
			description="Stories of our competitors"
		>
			<main>
				<div className={`container ${styles.mainContainer}`}>
					<h1>
						{translate({
							id: "testimonials.title",
							message: "Testimonials",
						})}
					</h1>
					<p>
						{translate({
							id: "testimonials.intro",
							message:
								"Robotics is much more than just building robots. Meet the people behind our teams — click on a photo to read their story.",
						})}
					</p>

					<div
						className={styles.profilesGrid}
						ref={grid.ref}
						style={{ maxWidth: grid.maxWidth }}
					>
						{profiles.map((profile) => (
							<ProfileCircle
								profile={profile}
								onOpen={setOpenProfile}
								key={profile.name}
							/>
						))}
					</div>

					<h2>
						{translate({
							id: "testimonials.stats.title",
							message: "𝐹𝐼𝑅𝑆𝑇 Slovenia in numbers",
						})}
					</h2>
					<StatsRow stats={stats} />
				</div>

				{openProfile && (
					<PdfModal
						profile={openProfile}
						onClose={() => setOpenProfile(null)}
					/>
				)}
			</main>
		</Layout>
	);
}

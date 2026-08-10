import { useEffect, useState, type ReactNode } from "react";
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
		name: "Gabrijel Steiner",
		programs: "FTC · FGC",
		image: "/img/testimonials/gabrijel-steiner.jpg",
		pdf: "/files/testimonials/gabrijel-steiner.pdf",
		preview: "/img/testimonials/previews/gabrijel-steiner.jpg",
	},
	{
		name: "Jaka Kovač",
		programs: "FLL · FTC · FGC",
		image: "/img/testimonials/jaka-kovac.jpg",
		pdf: "/files/testimonials/jaka-kovac.pdf",
		preview: "/img/testimonials/previews/jaka-kovac.jpg",
	},
	{
		name: "Ana Ločnikar",
		programs: "FTC · FGC",
		image: "/img/testimonials/ana-locnikar.jpg",
		pdf: "/files/testimonials/ana-locnikar.pdf",
		preview: "/img/testimonials/previews/ana-locnikar.jpg",
	},
];

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

					<div className={styles.profilesGrid}>
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

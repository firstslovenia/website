import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import CountdownEventCard from "@site/src/components/CountdownEventCard";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{translate({ id: "home.title", message: siteConfig.title })}
				</Heading>
				<p className="hero__subtitle">
					{translate({ id: "home.tagline", message: siteConfig.tagline })}
				</p>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description="For Inspiration and Recognition of Science and Technology Slovenia"
		>
			<HomepageHeader />
			<main>
				<section>
					<div className={`container ${styles.mainContainer}`}>
						<h1>
							{translate({
								id: "home.who-are-we.title",
								message: "Who are we?",
							})}
						</h1>

						<p
							dangerouslySetInnerHTML={{
								__html: translate({
									id: "home.who-are-we.content",
									message:
										"𝐹𝐼𝑅𝑆𝑇 Slovenia is a group of high school students and mentors who like to build robots and with their help confront juicy challenges. <em>We</em> represent the country of Slovenia in international robotics competitions and we need all the help we can get.",
								}),
							}}
						></p>

						<h1
							dangerouslySetInnerHTML={{
								__html: translate({
									id: "home.what-is-first.title",
									message: "What is 𝐹𝐼𝑅𝑆𝑇?",
								}),
							}}
						></h1>
						<p
							dangerouslySetInnerHTML={{
								__html: translate({
									id: "home.what-is-first.content",
									message:
										"𝐹𝐼𝑅𝑆𝑇 is the organisation behind competitions, where hundreds of thousands of high school students all around the world build on their passion in science, technology, engineering and mathematics (STEM). The competitions bring together leading STEM experts of the future and encourage the participants to help solve any and every global problem. With this the participants gain experience in different STEM fields.",
								}),
							}}
						></p>

						<h1>
							{translate({
								id: "home.what-we-do.title",
								message: "What are we currently working on?",
							})}
						</h1>

						<CountdownEventCard
							title="<em>FIRST </em>  Tech Challenge 2025 - European Premier Event "
							location=" Indoor-Sportcentrum Eindhoven, Theo Koomenlaan 1, Eindhoven, NB Netherlands "
							displayLocation="Eindhoven, Netherlands"
							startTime={new Date("2026-06-17T09:00:00+01:00")}
							endTime={new Date("2026-06-20T16:00:00+01:00")}
							coordinates={[51.412352, 5.481164]} // https://xkcd.com/2170
						/>

						<CountdownEventCard
							title="<em>FIRST </em>  Tech Challenge 2025 - İstanbul Premier Event "
							location="	Ataköy Turkiye Athletics Federation Athletics Hall- Ataköy Türkiye Atletizm Federasyonu Atletizm Alanı - Bakırköy İstanbul, Zuhuratbaba, Dr. Remzi Kazancıgil Cd. No:32, İstanbul, 34 Türkiye "
							displayLocation="İstanbul, Türkiye"
							startTime={new Date("2026-06-26T09:00:00+02:00")}
							endTime={new Date("2026-06-28T16:00:00+02:00")}
							coordinates={[40.988575, 28.854008]} // https://xkcd.com/2170
						/>

						<CountdownEventCard
							title="<em>FIRST </em> Global Challenge 2026"
							location=" Incheon, South Korea"
							displayLocation="Incheon, South Korea"
							startTime={new Date("2026-10-07T09:00:00+09:00")}
							endTime={new Date("2026-10-10T16:00:00+09:00")}
							coordinates={[37.388812, 126.646834]} // https://xkcd.com/2170
						/>

						{/* <p
							dangerouslySetInnerHTML={{
								__html: translate({
									id: "home.what-we-do",
									message: `
                        At the moment we are preparing for our <strong>fourth</strong> FIRST Tech Challenge. This year's challenge is themed <strong><em>DECODE</em></strong> and our upcoming competition will be

                        `,
								}),
							}}
						></p> */}

						<div className={styles.videos}>
							<h3
								dangerouslySetInnerHTML={{
									__html: translate({
										id: "home.what-we-do.video.location",
										message:
											"This year's location announcement",
									}),
								}}
							></h3>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/rgRwB3TDE8E"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className={styles.video}
							></iframe>
							<div style={{ height: '2em' }}></div>
							<h3
								dangerouslySetInnerHTML={{
									__html: translate({
										id: "home.what-we-do.video.chall",
										message:
											"Theme for this year's challenge, held in <em>Incheon, South Korea from 7th to 10th October</em>",
									}),
								}}
							></h3>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/gXTMkNImZG8"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className={styles.video}
							></iframe>
							{/* <h3
								dangerouslySetInnerHTML={{
									__html: translate({
										id: "home.what-we-do.video.robot",
										message:
											"Robot game for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>",
									}),
								}}
							></h3>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/ssNS1lYT1Fs"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className={styles.video}
							></iframe> */}
						</div>

						<div style={{ height: '5em' }}></div>
						
						<h1>
							{translate({
								id: "home.donations.title",
								message: "Donations and sponsorships",
							})}
						</h1>
						<p
							dangerouslySetInnerHTML={{
								__html: translate({
									id: "home.donations.content",
									message:
										'Application fees and travel expenses for the team are quite substantial, so we’re looking to raise money from donors and sponsors. If you’d like to help us out, please reach out to the following email <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>. It’d really help us out! To see who our current sponsors and donors are visit the page with the list of our supporters.',
								}),
							}}
						></p>
					</div>
				</section>
			</main>
		</Layout>
	);
}

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
										"𝐹𝐼𝑅𝑆𝑇 Slovenia is a group of high school students and mentors who like to build robots and with their help confront jucy challanges. <em>We</em> represent the country of Slovenia in international robotics competitions and we need all the help we can get.",
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
							title="<em>FIRST </em>  Tech Challenge 2025 - Germany Championship "
							location="Königin-Katharina-Stift, Schillerstraße 5, Stuttgart, Germany"
							displayLocation="Stuttgart, Germany"
							startTime={new Date("2026-01-31T08:15:00+01:00")}
							endTime={new Date("2026-01-31T18:30:00+01:00")}
							coordinates={[48.781248, 9.185488]} // https://xkcd.com/2170
						/>

						<CountdownEventCard
							title="<em>FIRST </em>  Tech Challenge 2025 - Italy Championship "
							location=" 	Villaggio Accademia, Via Cristoforo Colombo 18, Cesenatico, Italy "
							displayLocation="Cesenatico, Italy"
							startTime={new Date("2026-03-05T09:00:00+01:00")}
							endTime={new Date("2026-03-07T16:00:00+01:00")}
							coordinates={[44.216507, 12.386424]} // https://xkcd.com/2170
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
										id: "home.what-we-do.video.chall",
										message:
											"Theme for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>",
									}),
								}}
							></h3>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/C81IOjfVa3I"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className={styles.video}
							></iframe>
							<br />
							<h3
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
							></iframe>
						</div>

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
										'Application fees and travel expenses for the team are quite substantial, so we’re looking to raise money from donors and sposnors. If you’d like to help us out, please reach out to the following email <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>. It’d really help us out! To see who our current sponsors and donors are visit the page with the list of our supporters.',
								}),
							}}
						></p>
					</div>
				</section>
			</main>
		</Layout>
	);
}

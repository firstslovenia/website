import { useEffect, useState } from "react";
import { translate } from "@docusaurus/Translate";
import type { Stat } from "@site/src/components/StatsRow";

const FTC_TEAMS = [22903, 28080];
const FIRST_FTC_SEASON = 2022;

// Shown until FTC Scout responds (and if it is unreachable):
// VegaTech #28080, DECODE (2025/26), rank 1874 of 8363 worldwide.
// Recompute with: curl https://api.ftcscout.org/rest/v1/teams/<team>/quick-stats?season=<year>
const FALLBACK_OPR_TOP_PERCENT = NaN;

// FTC seasons start in September and are named after the starting year
function currentFtcSeason(): number {
	const now = new Date();
	return now.getMonth() >= 8 ? now.getFullYear() : now.getFullYear() - 1;
}

// Best total-OPR percentile of any of our teams in any season, as "top X %"
async function fetchBestOprTopPercent(): Promise<number> {
	const requests: Promise<number | null>[] = [];
	for (const team of FTC_TEAMS) {
		for (let season = FIRST_FTC_SEASON; season <= currentFtcSeason(); season++) {
			requests.push(
				fetch(
					`https://api.ftcscout.org/rest/v1/teams/${team}/quick-stats?season=${season}`,
				)
					.then((response) => (response.ok ? response.json() : null))
					.then((stats) =>
						stats?.tot?.rank && stats?.count
							? stats.tot.rank / stats.count
							: null,
					)
					.catch(() => null),
			);
		}
	}
	const percentiles = (await Promise.all(requests)).filter(
		(percentile): percentile is number => percentile !== null,
	);
	if (percentiles.length === 0) {
		throw new Error("FTC Scout returned no usable stats");
	}
	return Math.ceil(Math.min(...percentiles) * 100);
}

export function useFirstSloveniaStats(): Stat[] {
	const [oprTopPercent, setOprTopPercent] = useState(FALLBACK_OPR_TOP_PERCENT);

	useEffect(() => {
		let cancelled = false;
		fetchBestOprTopPercent()
			.then((percent) => {
				if (!cancelled) {
					setOprTopPercent(percent);
				}
			})
			.catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);

	return [
		{
			value: "60+",
			label: translate({
				id: "stats.students",
				message: "students since 2017",
			}),
		},
		// The first FGC season was 2017, so the current year is season (year - 2016)
		{
			value: `${new Date().getFullYear() - 2016}/${new Date().getFullYear() - 2021}`,
			label: translate({
				id: "stats.seasons",
				message: "𝐹𝐼𝑅𝑆𝑇 Global/Tech Challenge seasons",
			}),
		},
		{
			value: "12",
			label: translate({
				id: "stats.awards",
				message: "𝐹𝐼𝑅𝑆𝑇 Global/Tech Challenge awards",
			}),
		},
		{
			value: "2",
			label: translate({
				id: "stats.ftc",
				message: "active 𝐹𝐼𝑅𝑆𝑇 Tech Challenge teams",
			}),
		},
		{
			value: "4",
			label: translate({
				id: "stats.mentors",
				message: "mentors",
			}),
		},
		{
			value: "1",
			label: translate({
				id: "stats.volunteer",
				message: "international volunteer",
			}),
		},
		{
			value: `${oprTopPercent} %`,
			label: translate({
				id: "stats.opr",
				message: "best worldwide OPR rank (𝐹𝐼𝑅𝑆𝑇 Tech Challenge)",
			}),
		},
	];
}

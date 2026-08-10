import type { ReactNode } from "react";

import styles from "./StatsRow.module.css";

export type Stat = {
	value: string;
	label: string;
};

export default function StatsRow({ stats }: { stats: Stat[] }): ReactNode {
	return (
		<div className={styles.statsRow}>
			{stats.map((stat) => (
				<div className={styles.stat} key={stat.label}>
					<span className={styles.value}>{stat.value}</span>
					<span className={styles.label}>{stat.label}</span>
				</div>
			))}
		</div>
	);
}

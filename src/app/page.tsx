'use client';

import { useState } from 'react';
import styles from './page.module.css'
import RecipeCard from '@/components/recipe-card'
import Select from '@/components/select'
import Topbar from '@/components/topbar'

export default function Home() {
	const [type, setType] = useState('');

	const powerUps = [
		{
			name: 'Sparkling Power',
			level: 3
		},
		{
			name: 'Title Power',
			level: 3
		},
		{
			name: 'Encounter Power',
			level: 3
		}
	];

	const typesTest = [
		{
			id: 1,
			label: 'Normal'
		},
		{
			id: 2,
			label: 'Fire'
		}
	];

	const recipeTest = [
		{
			image: '🥚',
			title: 'Tofu',
			amount: 1
		},
		{
			image: '🍒',
			title: 'Salty Herba Mystica',
			amount: 1
		},
		{
			image: '🥬',
			title: 'Sour Herba Mystica',
			amount: 1
		}
	];

	const powerUpsEl = powerUps.map(power => {
		return <div 
			key={power.name}
			className={styles.listColumns}
		>
			<dt>
				{power.name}
			</dt>
			<dd className="font-italic">
				Level {power.level}
			</dd>
		</div>
	})

  return (
    <main className={styles.main}>
			<Topbar className={styles.topbar} />
			<aside className={styles.aside}>
				<div className={styles.asideWrap}>
					<Select
						id="typeSelect"
						className="spacer-b"
						defaultLabel="All types"
						label="Pokemon type"
						options={typesTest}
						onChange={(e) => setType(e)}
					/>
					<dl>
						{powerUpsEl}
					</dl>
				</div>
			</aside>
			<section className={styles.content}>
				<ul className={styles.recipeGrid}>
					<RecipeCard
						ingredients={recipeTest}
						title="Poison"
					/>
				</ul>
			</section>

			<svg width="13" height="13" viewBox="0 0 13 13">
				<defs>
					<pattern
						id="dotsPattern"
						width="13"
						height="13"
						patternUnits="userSpaceOnUse"
					>
						<path
							fill="var(--color-primary)"
							d="M5.32,0c.02,.71,.6,1.29,1.32,1.29s1.3-.57,1.32-1.29h-2.64Z"
						/>
						<path
							fill="var(--color-primary)"
							d="M5.32,13h2.64c-.02-.71-.6-1.29-1.32-1.29s-1.3,.57-1.32,1.29Z"
						/>
						<path
							fill="var(--color-primary)"
							d="M13,5.25s-.02,0-.03,0c-.73,0-1.32,.59-1.32,1.32s.59,1.32,1.32,1.32c.01,0,.02,0,.03,0v-2.64Z"
						/>
						<path
							fill="var(--color-primary)"
							d="M.03,5.25s-.02,0-.03,0v2.64s.02,0,.03,0c.73,0,1.32-.59,1.32-1.32S.76,5.25,.03,5.25Z"
						/>
					</pattern>
				</defs>
			</svg>
    </main>
  )
}

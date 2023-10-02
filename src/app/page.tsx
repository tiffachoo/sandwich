import styles from './page.module.css'
import TypeSelect from '@/components/type-select'
import Topbar from '@/components/topbar'

export default function Home() {
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

	const powerUpsEl = powerUps.map(power => {
		return <div key={power.name}>
			<dt>
				{power.name}
			</dt>
			<dd>
				Level {power.level}
			</dd>
		</div>
	})

  return (
    <main className={styles.main}>
			<Topbar className={styles.topbar} />
			<aside className={styles.aside}>
				<div className={styles.asideWrap}>
					<TypeSelect />
					<dl>
						{powerUpsEl}
					</dl>
				</div>
			</aside>
			<section className={styles.content}>
				Content
			</section>
    </main>
  )
}

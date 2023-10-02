import Image from 'next/image'
import styles from '../styles/topbar.module.css'

interface Topbar {
	className: string;
}

export default function Topbar(props: Topbar) {
	const rootClasses = `${styles.topbar} ${props.className}`

  return (
		<div className={rootClasses}>
			<h1 className="text-right">
				Sandwiches
			</h1>
			<div className={styles.topbarLogo}>
				<Image 
					alt="Sandwich"
					className={styles.topbarLogoImg}
					src="/img/sandwich.png"
					height={100}
					width={100}
					priority
				/>
				<svg className={styles.topbarLogoShape}>
					<path d="M75 2.5a4 4 0 0 0 7 .7c2-3 6.7-2 7.3 1.6A4 4 0 0 0 96 7a4 4 0 0 1 6.8 3 4 4 0 0 0 6.1 3.5 4 4 0 0 1 6 4.4 4 4 0 0 0 5.3 4.7 4 4 0 0 1 5 5.5 4 4 0 0 0 4.1 5.8 4 4 0 0 1 3.7 6.4 4 4 0 0 0 3 6.5 4 4 0 0 1 2.2 7 4 4 0 0 0 1.5 7 4 4 0 0 1 .8 7.3 4 4 0 0 0 0 7.1 4 4 0 0 1-.8 7.4 4 4 0 0 0-1.5 7 4 4 0 0 1-2.3 7 4 4 0 0 0-2.9 6.4 4 4 0 0 1-3.7 6.5 4 4 0 0 0-4.1 5.7 4 4 0 0 1-5 5.5 4 4 0 0 0-5.3 4.7 4 4 0 0 1-6 4.4 4 4 0 0 0-6 3.5 4 4 0 0 1-6.9 3 4 4 0 0 0-6.7 2.3A4 4 0 0 1 82 140a4 4 0 0 0-7 .7 4 4 0 0 1-7.4 0 4 4 0 0 0-7-.7 4 4 0 0 1-7.3-1.5 4 4 0 0 0-6.7-2.2 4 4 0 0 1-6.8-3 4 4 0 0 0-6.2-3.6 4 4 0 0 1-6-4.4 4 4 0 0 0-5.2-4.7 4 4 0 0 1-5-5.5 4 4 0 0 0-4.1-5.7 4 4 0 0 1-3.8-6.5 4 4 0 0 0-2.8-6.4 4 4 0 0 1-2.3-7 4 4 0 0 0-1.5-7 4 4 0 0 1-.8-7.4 4 4 0 0 0 0-7 4 4 0 0 1 .8-7.5 4 4 0 0 0 1.5-6.9 4 4 0 0 1 2.3-7 4 4 0 0 0 2.8-6.5 4 4 0 0 1 3.8-6.4 4 4 0 0 0 4.1-5.8 4 4 0 0 1 5-5.5c3 1.1 6-1.6 5.2-4.7a4 4 0 0 1 6-4.4 4 4 0 0 0 6.2-3.5 4 4 0 0 1 6.8-3 4 4 0 0 0 6.7-2.2 4 4 0 0 1 7.2-1.6 4 4 0 0 0 7-.7 4 4 0 0 1 7.5 0Z" />
				</svg>
			</div>
			<p 
				lang="ja"
				className="h1"
			>
				サンドウィッチ
			</p>
		</div>
  )
}

import styles from '../styles/components/recipe-card.module.css';

interface Ingredients {
	image: string;
	title: string;
	amount: number;
}

interface RecipeCard {
	ingredients: Ingredients[];
	title: string;
}

export default function RecipeCard({ ingredients, title }: RecipeCard) {
	const ingredientsEl = ingredients?.map(item => {
		return <div 
			className={styles.recipeCardItem}
			key={item.title}
		>
			<dt className={styles.recipeCardItemTitle}>
				{item.image}
				{item.title}
			</dt>
			<dd className={styles.recipeCardItemAmount}>
				{formatNumber(item.amount)}
			</dd>
		</div>
	});

	function formatNumber(value: number) {
		return new Intl.NumberFormat('en', { 
			minimumIntegerDigits: 2
		}).format(value);
	}

	return (
		<li className={styles.recipeCard}>
			<div className={styles.recipeCardHeader}>
				<h2 className={styles.recipeCardHeaderTitle}>
					{title}
				</h2>
				<svg className={styles.recipeCardHeaderPattern}>
					<rect 
						className={styles.recipeCardHeaderPatternRect}
						x="0"
						y="0"
					/>
				</svg>
			</div>
			{ingredients?.length &&
				<dl className={styles.recipeCardItems}>
					{ingredientsEl}
				</dl>
			}
		</li>
	);
}
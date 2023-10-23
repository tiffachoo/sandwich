import styles from '../styles/components/select.module.css';

interface Select {
	className?: string;
	defaultLabel?: string; 
	id: string;
	label: string;
	options: {
		id: string | number;
		label: string;
	}[];
	onChange: (e: string) => void;
}

export default function Select({ 
	className,
	defaultLabel = 'Select',
	id = 'select',
	label,
	options,
	onChange
}: Select) {

	const optionsEl = options?.map(option => {
		return <option
			key={option.id}
			value={option.id}
		>{option.label}</option>
	});

	return (
		<div className={`${styles.select} ${className}`}>
			<label
				htmlFor={id}
				className={styles.selectLabel}
			>
				{label}
			</label>
			<select
				id={id}
				className={styles.selectControl}
				onChange={e => onChange(e.target.value)}
			>
				<option value="select">
					{defaultLabel}
				</option>
				{optionsEl}
			</select>
		</div>
	);
}
export default function TypeSelect() {
	const pokemonTypes = [
		{
			id: 1,
			label: 'Normal'
		},
		{
			id: 2,
			label: 'Fire'
		}
	];

	const optionsEl = pokemonTypes.map(type => {
		return <option
			key={type.id}
			value={type.id}
		>{type.label}</option>
	});

	return (
		<div className="sandwich-select">
			<label>
				Type
			</label>
			<select>
				<option value="all">All</option>
				${optionsEl}
			</select>
		</div>
	);
}
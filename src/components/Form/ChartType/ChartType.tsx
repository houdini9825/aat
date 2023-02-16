import styles from './ChartType.module.scss';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedType } from '../../../store';


const chartOptions = [
	{ id: 'lineOne', name: 'Line Graph 1 Axis' },
	{ id: 'lineTwo', name: 'Line Graph 2 Axes' },
	{ id: 'table', name: 'Table' },
];

function ChartType() {
	const dispatch = useDispatch();
	const { selectedName } = useSelector((state: {chartType: {selectedName: string[]}}) => {
		return state.chartType;
	});

	const handleChange = (e: any) => {
		const id = chartOptions.find((opt) => opt.name === e.target.value)?.id;
		dispatch(changeSelectedType({ name: e.target.value, id }));
	};

	const renderedOptions = chartOptions.slice(0,2).map((opt) => {
		return (
			<MenuItem key={opt.id} value={opt.name}>
				{opt.name}
			</MenuItem>
		);
	});

	return (
		<div className={styles.container}>
				<InputLabel id="chart-type-label">Chart Type</InputLabel>
				<Select
					labelId="chart-type-label"
					id="chart-type-selection"
					value={selectedName}
					label="Chart Type"
					onChange={handleChange}
				>
					{renderedOptions}
				</Select>
		</div>
	);
}

export default ChartType;

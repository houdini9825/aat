import styles from './TimePeriod.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select';
import { changeFilterChoice } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import DosagesSelection from './DosagesSelection/DosagesSelection';
import SpecificTimeFrame from './SpecificTimeFrame/SpecificTimeFrame';
import SpecificYears from './SpecificYears/SpecificYears';
import SpecificDateRange from './SpecificDateRange/SpecificDateRange';
import DosageRange from './SpecificDosageRange/SpecificDosageRange';

function TimePeriod() {
	const dispatch = useDispatch();
	const { filterChoice } = useSelector(
		(state: StateObject) => {
			return state.timePeriod;
		}
	);

	const handleChange = (e: any) => {
		dispatch(changeFilterChoice(e.target.value))
	}

	return (
		<div className={styles.container}>
			<InputLabel id="filter-label">
				Filter
			</InputLabel>
			<Select
				labelId="filter-label"
				id="filter"
				value={filterChoice}
				label="Filter"
				onChange={handleChange}
			>
				<MenuItem value={'all dosages'}>All Dosages</MenuItem>
				<MenuItem value={'specific dosages'}>Specific Dosages</MenuItem>
				<MenuItem value={'specific timeframe'}>Specific Timeframe</MenuItem>
				<MenuItem value={'specific years'}>Specific Years</MenuItem>
				<MenuItem value={'specific date range'}>Specific Date Range</MenuItem>
				<MenuItem value={'specific dosage range'}>Specific Dosage Range</MenuItem>
			</Select>
			{filterChoice === 'specific dosages' && <DosagesSelection />}
			{filterChoice === 'specific timeframe' && <SpecificTimeFrame />}
			{filterChoice === 'specific years' && <SpecificYears />}
			{filterChoice === 'specific date range' && <SpecificDateRange/>}
			{filterChoice === 'specific dosage range' && <DosageRange />}
		</div>
	);
}

export default TimePeriod;

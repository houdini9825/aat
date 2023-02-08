import styles from './YAxisChoices.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeSelectedAxisChoices,
} from '../../../store';

const axisChoices = ['Symptoms', 'Dosages', 'NT Tests'];

function YAxisChoices({ multiLine }: {multiLine: boolean}) {
	const dispatch = useDispatch();
	const { selectedAxisChoices } =
		useSelector((state: {YAxisChoices: {selectedAxisChoices: string | string[]}}) => {
			return state.YAxisChoices;
		});

	const handleChange = (e: any) => {
		dispatch(changeSelectedAxisChoices(e.target.value));
	};

	const renderedOptions = axisChoices.map((choice) => {
		return (
			<MenuItem key={choice} value={choice}>
				{multiLine ? <><Checkbox checked={selectedAxisChoices.includes(choice)} /><div>{choice}</div></> : choice}
			</MenuItem>
		);
	});

	return (
		<div className={styles.container}>
			<InputLabel id="axis-choices-label">Axis Choices</InputLabel>
			<Select
				labelId="axis-choices-label"
				id="axis-choices"
				value={selectedAxisChoices}
				renderValue={(selected) => {
					return multiLine && Array.isArray(selected) ? selected.join(', ') : selected;
				}}
				label="Axis Choices"
				onChange={handleChange}
				multiple={multiLine}
			>
				{renderedOptions}
			</Select>
		</div>
	);
}

export default YAxisChoices;

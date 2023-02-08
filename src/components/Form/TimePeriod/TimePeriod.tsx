import styles from './TimePeriod.module.scss';
import Input from '../../UI/Input/Input';
import { changeAllDosages } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import DosagesSelection from './DosagesSelection/DosagesSelection';

function TimePeriod() {
	const dispatch = useDispatch();
	const { allDosages } = useSelector((state: {timePeriod: {allDosages: boolean}}) => {
		return state.timePeriod;
	});
	return (
		<div className={styles.container}>
			<h2>Filter</h2>
			<Input
				name="time-period"
				id="all-dosages"
				label="All dosages"
				inputType="radio"
				checked={allDosages}
				onChange={() => dispatch(changeAllDosages(null))}
			/>
			<DosagesSelection />
		</div>
	);
}

export default TimePeriod;

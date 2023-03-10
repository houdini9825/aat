import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import styles from './DosagesSelection.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedDoses } from '../../../../store';
import { useEffect } from 'react';

let mounted = false;

function DosagesSelection() {
	const dispatch = useDispatch();
	const { dosages, dbsLabs, leLabs } = useSelector(
		(state: {
			patientData: { dosages: any[]; dbsLabs: any[]; leLabs: any[] };
		}) => {
			return state.patientData;
		}
	);

	const { selectedDoses } = useSelector(
		(state: StateObject) =>
			state.timePeriod
	);

	const { selectedAxisChoices } = useSelector(
		(state: { YAxisChoices: { selectedAxisChoices: string | string[] } }) =>
			state.YAxisChoices
	);

	const { selectedTest } = useSelector(
		(state: { testsList: { selectedTest: string } }) => state.testsList
	);

	useEffect(() => {
		if (!mounted) {
			dispatch(updateSelectedDoses([dosages.at(-1).dosageNumber]));
			mounted = true;
		}
	}, [dispatch, dosages]);

	const handleChange = (e: any) => {
		dispatch(updateSelectedDoses(e.target.value));
	};

	let renderedDosageOptions;

	if (
		selectedAxisChoices.includes('Symptoms')
	) {
		renderedDosageOptions = dosages.map((dose, i, arr) => {
			dose = arr[arr.length - 1 - i];
			return (
				<MenuItem key={dose.dosageNumber} value={String(dose.dosageNumber)}>
					<div>{dose.dosageNumber}.</div>
					<Checkbox
						checked={selectedDoses.includes(String(dose.dosageNumber))}
					/>
					<div>
						<div>
							{new Date(dose.days[0].date).toLocaleDateString()} ~ {new Date(dose.days.at(-1).date).toLocaleDateString()}
						</div>
						<div>5-htp: {dose['5-htp']}mg</div>
						<div>L-dopa: {dose['L-dopa']}mg</div>
						<div>Tyrosine: {dose['Tyrosine']}mg</div>
					</div>
				</MenuItem>
			);
		});
	}

	if (
		selectedAxisChoices.includes('NT Tests')
	) {
		const selectedLab = selectedTest === 'DBS Labs' ? dbsLabs : leLabs;
		renderedDosageOptions = [...selectedLab].reverse().map((dose) => {
			return (
				<MenuItem key={dose.date} value={dose.date}>
					<Checkbox checked={selectedDoses.includes(dose.date)} />
					<div>
						<div>{new Date(dose.date).toLocaleDateString()}</div>
						<div>5-htp: {dose['5-htp']}mg</div>
						<div>L-dopa: {dose['L-dopa']}mg</div>
						<div>Tyrosine: {dose['Tyrosine']}mg</div>
					</div>
				</MenuItem>
			);
		});
	}


	return (
		<div className={styles.container}>
			<InputLabel id="time-selected-dosages-label">
				Specific Dosage(s)
			</InputLabel>
			<Select
				labelId="time-selected-dosages-label"
				id="time-selected-dosages"
				value={selectedDoses}
				renderValue={(selected) => {
					return selected.map(s => String(s).split('T')[0]).join(', ');
				}}
				label="Dosages"
				onChange={handleChange}
				multiple
			>
				{renderedDosageOptions}
			</Select>
		</div>
	);
}

export default DosagesSelection;

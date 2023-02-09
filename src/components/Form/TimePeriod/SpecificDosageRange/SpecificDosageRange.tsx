import styles from './SpecificDosageRange.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { updateDosageRange, updateDosageSelection } from '../../../../store';

function DosageRange() {
	const dispatch = useDispatch();

	const {
		timePeriod: { dosageRange },
	} = useSelector((state: StateObject) => {
		return state;
	});

	const handleChange = (e: any) => {
		dispatch(updateDosageSelection(e.target.value));
	};

  const handleInputChange = (e: any, amino: string, pos: string) => {
    if (e.target.value === '' || (!isNaN(Number(e.target.value)) && Number(e.target.value) >= 0)) {
      dispatch(updateDosageRange({amino, [pos]: e.target.value}))
    }
  }

  const handleClick = (e: any) => {
    e.stopPropagation()

  }

  const renderedOptions = ['5-htp', 'L-dopa', 'Tyrosine'].map(amino => {
    return <MenuItem key={amino} value={amino}>
    <Checkbox checked={dosageRange.selectedAminos.includes(amino)}/>
    <div className={styles.aminoContainer}>
      <label>{amino}</label>
      <div className={styles.inputContainer}>
        <label htmlFor={`dose-range-${amino}-start`}>Start</label>
        <input value={dosageRange[amino].start} onChange={(e) => handleInputChange(e, amino, 'start')} onClick={handleClick} id={`dose-range-${amino}-start`} type='text'/>
        <label htmlFor={`dose-range-${amino}-end`}>End</label>
        <input value={dosageRange[amino].end} onChange={(e) => handleInputChange(e, amino, 'end')} onClick={handleClick} id={`dose-range-${amino}-end`} type='text'/>
      </div>
    </div>
  </MenuItem>
  })

	return (
		<div className={styles.container}>
			<InputLabel id="dosage-range-label">Dosage Range</InputLabel>
			<Select
				labelId="dosage-range-label"
				id="dosage-range"
				value={dosageRange.selectedAminos}
        renderValue={selected => selected.join(', ')}
				label="Dosage Range"
				onChange={handleChange}
        multiple
			>
				{renderedOptions}
			</Select>
		</div>
	);
}

export default DosageRange;

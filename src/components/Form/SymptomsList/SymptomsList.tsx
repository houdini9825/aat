import styles from './SymptomsList.module.scss';
import {
	changeSelectedSymptoms
} from '../../../store';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import { useDispatch, useSelector } from 'react-redux';

function SymptomsList() {
	const dispatch = useDispatch();
	const [patientData, selectedSymptoms] = useSelector((state: {patientData: any, symptoms: {selectedSymptoms: string[]}}) => {
		return [state.patientData, state.symptoms.selectedSymptoms]
	});

  const renderedSymptoms = patientData.allSymptoms.map((symp: string) => {
    return <MenuItem key={symp} value={symp}><Checkbox checked={selectedSymptoms.includes(symp)} />{symp}</MenuItem>
  })

  

  const handleChange = (e: any) => {
    dispatch(changeSelectedSymptoms(e.target.value))
  }


	return (
		<div className={styles.container}>
      <InputLabel id='symptom-choices-label'>Symptoms</InputLabel>
      <Select
      labelId="symptom-choices-label"
      id="symptom-choices"
      value={selectedSymptoms}
      renderValue={(selected) => {
        return selected.join(', ');
      }}
      label="Symptom Choices"
      onChange={handleChange}
      multiple>
        {renderedSymptoms}
      </Select>
		</div>
	);
}

export default SymptomsList;

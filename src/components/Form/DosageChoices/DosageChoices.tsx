import { useDispatch, useSelector } from 'react-redux';
import styles from './DosageChoices.module.scss'
import {changeAminoOption} from '../../../store'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'

const aminos = ['5-htp', 'L-dopa', 'Tyrosine']

function DosageChoices() {
  const dispatch = useDispatch()
  const {selectedAminos} = useSelector((state: {dosageOptions: {selectedAminos: string[]}}) => {
    return state.dosageOptions
  })

	const renderedChoices = aminos.map(amino => {
		return <MenuItem key={amino} value={amino}><Checkbox checked={selectedAminos.includes(amino)}/>{amino}</MenuItem>
	})

	const handleChange = (e: any) => {
		dispatch(changeAminoOption(e.target.value))
	}

	return (
		<div className={styles.container}>
      <InputLabel id='amino-choices-label'>NT Precursors</InputLabel>
      <Select
      labelId="amino-choices-label"
      id="amino-choices"
      value={selectedAminos}
      renderValue={(selected) => {
        return selected.join(', ');
      }}
      label="Amino Choices"
      onChange={handleChange}
      multiple>
        {renderedChoices}
      </Select>
		</div>
	);
}

export default DosageChoices;

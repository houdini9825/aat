import styles from './SpecificYears.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox'
import {useDispatch, useSelector} from 'react-redux'
import {updateSpecificYears} from '../../../../store'

function SpecificYears() {
  const dispatch = useDispatch()

  const {
    timePeriod: {specificYears},
    YAxisChoices: {selectedAxisChoices},
    patientData: {dosages, leLabs, dbsLabs},
    testsList: {selectedTest}
} = useSelector((state: StateObject) => {
    return state
  })

  const handleChange = (e: any) => {
    dispatch(updateSpecificYears(e.target.value))
  }

  let years = new Set()

  if (selectedAxisChoices.includes('NT Tests')) {
    const selectedTestLab = selectedTest === 'DBS Labs' ? dbsLabs : leLabs

    selectedTestLab.forEach(test => {
      years.add(test.date.slice(-2))
    })
  } else {
    dosages.forEach(dose => {
      years.add(dose.days[0].date.slice(-2))
    })
  }

  const formattedYears = Array.from(years.values()).map(year => `20${year}`).sort((a,b) => {
    return Number(b) - Number(a)
  })

  const renderedOptions = formattedYears.map(year => {
    return <MenuItem key={year} value={year}><Checkbox checked={specificYears.includes(year)}/>{year}</MenuItem>
  })


	return (
		<div className={styles.container}>
			<InputLabel id="specific-year-label">Years</InputLabel>
			<Select
				labelId="specific-year-label"
				id="specific-year"
				value={specificYears}
				label="Specific Year"
        renderValue={selected => selected.join(', ')}
				onChange={handleChange}
        multiple
			>
				{renderedOptions}
			</Select>
		</div>
	);
}

export default SpecificYears;

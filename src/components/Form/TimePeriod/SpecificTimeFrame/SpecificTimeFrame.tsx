import styles from './SpecificTimeFrame.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from 'react-redux'
import {updateSpecificTimeFrame} from '../../../../store'

function SpecificTimeFrame() {
  const dispatch = useDispatch()

  const {
    timePeriod: {specificTimeFrame}
} = useSelector((state: StateObject) => {
    return state
  })

  const handleChange = (e: any) => {
    dispatch(updateSpecificTimeFrame(e.target.value))
  }

	return (
		<div className={styles.container}>
			<InputLabel id="specific-timeframe-label">Timeframe</InputLabel>
			<Select
				labelId="specific-timeframe-label"
				id="specific-timeframe"
				value={specificTimeFrame}
				label="Specific Timeframe"
				onChange={handleChange}
			>
				<MenuItem value={'one month'}>Past One Month</MenuItem>
				<MenuItem value={'three months'}>Past Three Months</MenuItem>
				<MenuItem value={'six months'}>Past Six Months</MenuItem>
				<MenuItem value={'one year'}>Past Year</MenuItem>
			</Select>
		</div>
	);
}

export default SpecificTimeFrame;

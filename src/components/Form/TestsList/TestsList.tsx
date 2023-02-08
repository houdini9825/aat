import styles from './TestsList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedTest } from '../../../store';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function TestsList() {
  const dispatch = useDispatch()
  const {selectedTest}  = useSelector((state: {testsList: {selectedTest: string}}) => {
    return state.testsList
  })

	const handleChange = (e: any) => {
		dispatch(changeSelectedTest(e.target.value))
	}

	return (
		<div className={styles.container}>
			<InputLabel id="test-providers-label">
				Test Providers
			</InputLabel>
			<Select
				labelId="test-providers-label"
				id="test-providers-options"
				value={selectedTest}
				label="Test Providers"
				onChange={handleChange}
			>
				<MenuItem value='DBS Labs'>DBS Labs</MenuItem>
				<MenuItem value='Life Extension'>Life Extension</MenuItem>
			</Select>
		</div>
	);
}

export default TestsList

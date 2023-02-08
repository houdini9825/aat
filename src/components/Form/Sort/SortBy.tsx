import styles from './SortBy.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { changeDirection, changeEntity } from '../../../store';

function SortBy() {
	const dispatch = useDispatch();

	const { direction, entity } = useSelector(
		(state: StateObject) => state.sortedBy
	);

	const handleDirectionChange = (e: any) => {
		dispatch(changeDirection(e.target.value));
	};

  const handleEntityChange = (e: any) => {
    dispatch(changeEntity(e.target.value))
  }

	return (
		<div className={styles.container}>
      <h2>Sort</h2>
			<InputLabel id="sort-direction-label">Direction</InputLabel>
			<Select
				labelId="sort-direction-label"
				id="sort-direction-selection"
				value={direction}
				renderValue={(selected) =>
					selected[0].toUpperCase() + selected.slice(1)
				}
				label="Sort Direction"
				onChange={handleDirectionChange}
			>
				<MenuItem value={'ascending'}>Ascending</MenuItem>
				<MenuItem value={'descending'}>Descending</MenuItem>
			</Select>
			<InputLabel id="sort-entity-label">Entity</InputLabel>
			<Select
				labelId="sort-entity-label"
				id="sort-entity-selection"
				value={entity}
				label="Sort Direction"
				onChange={handleEntityChange}
			>
        <MenuItem value='Date'>Date</MenuItem>
				<MenuItem value={'5-htp'}>5-htp</MenuItem>
				<MenuItem value={'L-dopa'}>L-dopa</MenuItem>
				<MenuItem value={'Tyrosine'}>Tyrosine</MenuItem>
			</Select>
		</div>
	);
}

export default SortBy;

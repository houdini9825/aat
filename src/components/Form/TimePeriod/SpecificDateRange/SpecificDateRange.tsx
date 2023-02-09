import styles from './SpecificDateRange.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useRef} from 'react'
import {updateDateRange} from '../../../../store'


function SpecificDateRange() {
  const dispatch = useDispatch()

  const {dateRange} = useSelector((state: StateObject) => state.timePeriod)

  const startRef = useRef<HTMLInputElement | null>(null)
  const endRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (startRef.current && endRef.current) {
      dispatch(updateDateRange({start: startRef.current.value, end: endRef.current.value}))
    }
  }


	return (
		<div className={styles.container}>
			<div>
        <label htmlFor='filter-start-date'>Start</label>
        <input id='filter-start-date' onChange={handleChange} ref={startRef} type='date' value={dateRange.start} />
      </div>
			<div>
        <label htmlFor='filter-end-date'>End</label>
        <input id='filter-end-date' min={dateRange.start} onChange={handleChange} ref={endRef} type='date' value={dateRange.end} />
      </div>
		</div>
	);
}

export default SpecificDateRange;

import {FilterTestsByDate, FilterDosagesByDate} from '../helpers/Filters/FilterByDate'
import FilterByDosageAmount from '../helpers/Filters/FilterByDosageAmount'
import FilterBySpecificDosage from '../helpers/Filters/FilterBySpecificDosage'
import {useSelector} from 'react-redux'

function useFilteredData(data: (TestsObject | DosageObject)[]): (TestsObject | DosageObject)[] {
  const {
    filterChoice,
    selectedDoses,
    dateRange,
    specificTimeFrame,
    specificYears,
    dosageRange
  } = useSelector((state: StateObject) => {
    return state.timePeriod
  })

  const filterChoiceIsSpecificDosages = filterChoice === 'specific dosages'
  const filterChoiceIsCustomDateRange = filterChoice === 'specific date range'
  const filterChoiceIsSpecificTimeFrame = filterChoice === 'specific timeframe'
  const filterChoiceIsSpecificYears = filterChoice === 'specific years'
  const filterChoiceIsDosageRange = filterChoice === 'specific dosage range'


  const isTestsObjectArray = (d: (TestsObject | DosageObject)[]): d is TestsObject[] => {
    if (d[0].date) return true
    return false
  }

  if (filterChoiceIsSpecificDosages) {
    if (isTestsObjectArray(data)) return data

    return FilterBySpecificDosage(data as DosageObject[], selectedDoses)
  }

  if (filterChoiceIsCustomDateRange) {
    const startDate = new Date(dateRange.start)
    const endDate = new Date(dateRange.end)

    if (!startDate || !endDate) return data

    if (isTestsObjectArray(data)) {
      return FilterTestsByDate(data, startDate, endDate)
    } else {

    return FilterDosagesByDate(data as DosageObject[], startDate, endDate)
    }
  }




  
  return data
}

export default useFilteredData
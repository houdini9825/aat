import {FilterTestsByDate, FilterDosagesByDate} from '../helpers/Filters/FilterByDate'
import FilterByDosageAmount from '../helpers/Filters/FilterByDosageAmount'
import FilterBySpecificDosage from '../helpers/Filters/FilterBySpecificDosage'
import {FilterDosagesByYears, FilterTestsByYears} from '../helpers/Filters/FilterByYears'
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

  const dataIsTests = isTestsObjectArray(data)

  if (filterChoiceIsSpecificDosages) {
    if (dataIsTests) return data

    return FilterBySpecificDosage(data as DosageObject[], selectedDoses)
  }

  if (filterChoiceIsCustomDateRange) {
    const startDate = new Date(dateRange.start)
    const endDate = new Date(dateRange.end)

    if (!startDate || !endDate) return data

    if (dataIsTests) {
      return FilterTestsByDate(data as TestsObject[], startDate, endDate)
    } else {

    return FilterDosagesByDate(data as DosageObject[], startDate, endDate)
    }
  }

  if (filterChoiceIsSpecificTimeFrame) {
    const presentDate = new Date()
    const dayMilliseconds = (8.64 * 10 ** 7)
    let days
    if (specificTimeFrame === 'one month') days = 30
    else if (specificTimeFrame === 'three months') days = 90
    else if (specificTimeFrame === 'six months') days = 180
    else if (specificTimeFrame === 'one year') days = 365
    if (!days) return data

    const startDate = new Date(presentDate.getTime() - dayMilliseconds * days)

    return dataIsTests ? FilterTestsByDate(data as TestsObject[], startDate, presentDate) : FilterDosagesByDate(data as DosageObject[], startDate, presentDate)
  }

  if (filterChoiceIsSpecificYears) {
    if (!specificYears.length) return data
    const numYears = specificYears.map(year => Number(year))

    if (dataIsTests) data = FilterTestsByYears(data as TestsObject[], numYears)
    else data = FilterDosagesByYears(data as DosageObject[], numYears)

    return data
  }

  if (filterChoiceIsDosageRange) {
    if (!dosageRange.selectedAminos.length) return data
    
    dosageRange.selectedAminos.forEach(amino => {
      const numStart = Number(dosageRange[amino].start)
      const numEnd = Number(dosageRange[amino].end)
      if (numStart && numEnd) {
        data = FilterByDosageAmount(data, amino, numStart, numEnd)
      }
    })

    return data
  }




  
  return data
}

export default useFilteredData
import { useSelector } from 'react-redux';
import lineOneTestsAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneTestsAllDosages';
import lineOneSymptomsSpecificDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneSymptomsSpecificDosages';
import lineTwoTestsDosages from '../helpers/LineGraph/Options/LineTwoAxes/lineTwoTestsDosages';
import lineOneSymptomsAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneSymptomsAllDosages';
import lineOneDosagesAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneDosagesAllDosages'
import lineTwoDosagesSymptomsAllDosages from '../helpers/LineGraph/Options/LineTwoAxes/lineTwoDosagesSymptomsAllDosages';
import useSortedFilteredData from './use-sorted-filtered-data';

function useLineOptions() {

	const {
		chartType: {selectedChartId},
		YAxisChoices: {selectedAxisChoices},
		timePeriod: {filterChoice, selectedDoses},
		patientData: {dosages: oldDosages},
		testsList: {selectedTest}} = useSelector((state: StateObject) => state)

	const dosages = useSortedFilteredData(oldDosages)

	const chartIdIsOne = selectedChartId === 'lineOne'
	const chartIdIsTwo = selectedChartId === 'lineTwo'

	const allDosages = filterChoice === 'all dosages'
	const selectedDosesValid = filterChoice === 'specific dosages'
	const filterIsSpecificTimeframe = filterChoice === 'specific timeframe'
	const filterIsSpecificYears = filterChoice === 'specific years'
	const filterIsSpecificDateRange = filterChoice === 'specific date range'
	const filterIsSpecificDosageRange = filterChoice === 'specific dosage range'

	const wideFilterValid = (allDosages || filterIsSpecificTimeframe || filterIsSpecificYears || filterIsSpecificDateRange || filterIsSpecificDosageRange)

	const symptomsAxisSelected = selectedAxisChoices.includes('Symptoms')
	const dosagesAxisSelected = selectedAxisChoices.includes('Dosages')
	const testsAxisSelected = selectedAxisChoices.includes('NT Tests')

	if (chartIdIsOne && selectedDosesValid && symptomsAxisSelected) {
		return lineOneSymptomsSpecificDosages({dosages, selectedDoses})
	}

	if (chartIdIsOne && testsAxisSelected) {
		return lineOneTestsAllDosages({selectedTest})
	}


	if (chartIdIsOne && symptomsAxisSelected && wideFilterValid) {
		return lineOneSymptomsAllDosages()
	}

	if (chartIdIsOne && dosagesAxisSelected && wideFilterValid) {
		return lineOneDosagesAllDosages()
	}

	if (chartIdIsTwo && dosagesAxisSelected && symptomsAxisSelected && wideFilterValid) {
		return lineTwoDosagesSymptomsAllDosages()
	}

	if (chartIdIsTwo && testsAxisSelected && dosagesAxisSelected && selectedTest) {
		return lineTwoTestsDosages({selectedTest})
}
}

export default useLineOptions;

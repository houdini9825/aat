import { useSelector } from 'react-redux';
import lineOneTestsAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneTestsAllDosages';
import lineOneSymptomsSpecificDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneSymptomsSpecificDosages';
import lineTwoTestsDosages from '../helpers/LineGraph/Options/LineTwoAxes/lineTwoTestsDosages';
import lineOneSymptomsAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneSymptomsAllDosages';
import lineOneDosagesAllDosages from '../helpers/LineGraph/Options/LineOneAxis/lineOneDosagesAllDosages'
import lineTwoDosagesSymptomsAllDosages from '../helpers/LineGraph/Options/LineTwoAxes/lineTwoDosagesSymptomsAllDosages';

function useLineOptions() {

	const {
		chartType: {selectedChartId},
		YAxisChoices: {selectedAxisChoices},
		timePeriod: {filterChoice, selectedDoses},
		patientData: {dosages},
		testsList: {selectedTest}} = useSelector((state: StateObject) => state)

	const chartIdIsOne = selectedChartId === 'lineOne'
	const chartIdIsTwo = selectedChartId === 'lineTwo'
	const allDosages = filterChoice === 'all dosages'
	const symptomsAxisSelected = selectedAxisChoices.includes('Symptoms')
	const dosagesAxisSelected = selectedAxisChoices.includes('Dosages')
	const testsAxisSelected = selectedAxisChoices.includes('NT Tests')
	const selectedDosesValid = filterChoice === 'specific dosages'

	if (chartIdIsOne && selectedDosesValid && symptomsAxisSelected) {
		return lineOneSymptomsSpecificDosages({dosages, selectedDoses})
	}

	if (chartIdIsOne && testsAxisSelected) {
		return lineOneTestsAllDosages({selectedTest})
	}


	if (chartIdIsOne && symptomsAxisSelected && allDosages) {
		return lineOneSymptomsAllDosages()
	}

	if (chartIdIsOne && dosagesAxisSelected && allDosages) {
		return lineOneDosagesAllDosages()
	}

	if (chartIdIsTwo && dosagesAxisSelected && symptomsAxisSelected && allDosages) {
		return lineTwoDosagesSymptomsAllDosages()
	}

	if (chartIdIsTwo && testsAxisSelected && dosagesAxisSelected && selectedTest) {
		return lineTwoTestsDosages({selectedTest})
}
}

export default useLineOptions;

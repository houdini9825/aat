import { useSelector } from 'react-redux';
import lineOneDosagesAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneDosagesAllDosages';
import lineOneSymptomsAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneSymptomsAllDosages';
import lineOneTestsSpecificDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneTestsSpecificDosages';
import lineOneSymptomsSpecificDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneSymptomsSpecificDosages';
import lineTwoTestsDosages from '../helpers/LineGraph/Data/LineTwoAxes/lineTwoTestsDosages';
import lineOneTestsAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneTestsAllDosages';
import useSortedFilteredData from '../hooks/use-sorted-filtered-data'

function useLineData() {
	let {
		chartType: { selectedChartId },
		YAxisChoices: { selectedAxisChoices },
		timePeriod: { filterChoice, selectedDoses },
		patientData: { dosages: oldDosages, dbsLabs: oldDbs, leLabs: oldLe },
		testsList: { selectedTest },
		dosageOptions: { selectedAminos },
		symptoms: { selectedSymptoms: symptoms },
	} = useSelector((state: StateObject) => state);

	const dosages = useSortedFilteredData(oldDosages)
	const dbsLabs = useSortedFilteredData(oldDbs)
	const leLabs = useSortedFilteredData(oldLe)


	const chartIdIsOne = selectedChartId === 'lineOne';
	const chartIdIsTwo = selectedChartId === 'lineTwo';

	const allDosages = filterChoice === 'all dosages'
	const selectedDosesValid = filterChoice === 'specific dosages'
	const filterIsSpecificTimeframe = filterChoice === 'specific timeframe'
	const filterIsSpecificYears = filterChoice === 'specific years'
	const filterIsSpecificDateRange = filterChoice === 'specific date range'
	const filterIsSpecificDosageRange = filterChoice === 'specific dosage range'

	const wideFilterValid = (allDosages || filterIsSpecificTimeframe || filterIsSpecificYears || filterIsSpecificDateRange || filterIsSpecificDosageRange)

	const symptomsAxisSelected = selectedAxisChoices.includes('Symptoms');
	const dosagesAxisSelected = selectedAxisChoices.includes('Dosages');
	const testsAxisSelected = selectedAxisChoices.includes('NT Tests');


	if (chartIdIsOne && testsAxisSelected && selectedDosesValid) {
		return lineOneTestsSpecificDosages({
			selectedTest,
			dbsLabs,
			leLabs,
		});
	}

	if (chartIdIsOne && symptomsAxisSelected && selectedDosesValid) {
		return lineOneSymptomsSpecificDosages({
			symptoms,
			dosages,
		});
	}

	if (chartIdIsOne && testsAxisSelected && selectedTest && wideFilterValid) {
		
		return lineOneTestsAllDosages({ selectedTest, dbsLabs, leLabs });
	}

	if (chartIdIsOne && symptomsAxisSelected && wideFilterValid) {
		return lineOneSymptomsAllDosages({ symptoms, dosages, side: 'left' });
	}

	if (chartIdIsOne && dosagesAxisSelected && wideFilterValid) {
		return lineOneDosagesAllDosages({
			selectedAminos,
			dosages,
			side: 'left',
		});
	}

	if (
		chartIdIsTwo &&
		testsAxisSelected &&
		dosagesAxisSelected
	) {
		return lineTwoTestsDosages({
			selectedAminos,
			dbsLabs,
			leLabs,
			selectedTest,
		});
	}

	if (
		chartIdIsTwo &&
		dosagesAxisSelected &&
		symptomsAxisSelected
	) {
		const { labels, datasets: symptomsDatasets } =
			lineOneSymptomsAllDosages({ symptoms, dosages, side: 'left' });
		const { datasets: dosagesDatasets } = lineOneDosagesAllDosages({
			selectedAminos,
			dosages,
			side: 'right',
		});


		return {
			labels,
			datasets: symptomsDatasets.concat(dosagesDatasets),
		};
	}

	return {
		labels: [],
		datasets: [],
	};
}

export default useLineData;

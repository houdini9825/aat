import { useSelector } from 'react-redux';
import lineOneDosagesAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneDosagesAllDosages';
import lineOneSymptomsAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneSymptomsAllDosages';
import lineOneTestsSpecificDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneTestsSpecificDosages';
import lineOneSymptomsSpecificDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneSymptomsSpecificDosages';
import lineTwoTestsDosages from '../helpers/LineGraph/Data/LineTwoAxes/lineTwoTestsDosages';
import lineOneTestsAllDosages from '../helpers/LineGraph/Data/LineOneAxis/lineOneTestsAllDosages';
import useSortedData from './use-sorted-data';

function useLineData() {
	let {
		chartType: { selectedChartId },
		YAxisChoices: { selectedAxisChoices },
		timePeriod: { allDosages, selectedDoses },
		patientData: { dosages, dbsLabs, leLabs },
		testsList: { selectedTest },
		dosageOptions: { selectedAminos },
		symptoms: { selectedSymptoms: symptoms },
	} = useSelector((state): any => state);

	dosages = useSortedData(dosages)
	dbsLabs = useSortedData(dbsLabs)
	leLabs = useSortedData(leLabs)
	

	const chartIdIsOne = selectedChartId === 'lineOne';
	const chartIdIsTwo = selectedChartId === 'lineTwo';
	const symptomsAxisSelected = selectedAxisChoices.includes('Symptoms');
	const dosagesAxisSelected = selectedAxisChoices.includes('Dosages');
	const testsAxisSelected = selectedAxisChoices.includes('NT Tests');
	const selectedDosesValid = selectedDoses.length;

	if (chartIdIsOne && testsAxisSelected && selectedDosesValid) {
		return lineOneTestsSpecificDosages({
			selectedTest,
			selectedDoses,
			dbsLabs,
			leLabs,
		});
	}

	if (chartIdIsOne && selectedDosesValid && symptomsAxisSelected) {
		return lineOneSymptomsSpecificDosages({
			symptoms,
			dosages,
			selectedDoses,
		});
	}

	if (chartIdIsOne && testsAxisSelected && selectedTest && allDosages) {
		return lineOneTestsAllDosages({ selectedTest, dbsLabs, leLabs });
	}

	if (chartIdIsOne && symptomsAxisSelected && allDosages) {
		return lineOneSymptomsAllDosages({ symptoms, dosages, side: 'left' });
	}

	if (chartIdIsOne && dosagesAxisSelected && allDosages) {
		return lineOneDosagesAllDosages({
			selectedAminos,
			dosages,
			side: 'left',
		});
	}

	if (
		chartIdIsTwo &&
		testsAxisSelected &&
		dosagesAxisSelected &&
		selectedTest
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
		symptomsAxisSelected &&
		allDosages
	) {
		console.log('works')
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

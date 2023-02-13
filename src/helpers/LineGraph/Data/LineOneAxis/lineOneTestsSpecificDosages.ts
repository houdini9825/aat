import generateDataset from '../generateDataset';

function lineOneTestsSpecificDosages({
	selectedTest,
	dbsLabs,
	leLabs,
}: {
	selectedTest: string,
  dbsLabs: any[],
  leLabs: any[]
}) {
	let testData = selectedTest === 'DBS Labs' ? dbsLabs : leLabs;

	const labels = testData.map((test) => test.date);

  type dataObject = {
    [key: string]: number[],
    serotonin: number[],
    dopamine: number[]
  }

	const dataObj: dataObject = { serotonin: [], dopamine: [] };
	const datasets = [];
	const dosagesList: string[][] = [];

	testData.forEach((test) => {
		dataObj.serotonin.push(test.serotonin);
		dataObj.dopamine.push(test.dopamine);
		dosagesList.push([
			`5-htp: ${test['5-htp']}`,
			`L-dopa: ${test['L-dopa']}`,
			`Tyrosine: ${test['Tyrosine']}`,
		]);
	});

	for (let nt in dataObj) {
		datasets.push(
			generateDataset({
				label: nt,
				data: dataObj[nt],
				yAxisID: 'left',
				dosagesList,
				point: true,
			})
		);
	}

	return {
		labels,
		datasets,
	};
}

export default lineOneTestsSpecificDosages;

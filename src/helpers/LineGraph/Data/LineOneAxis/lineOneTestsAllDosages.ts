import generateDataset from '../generateDataset';

function lineOneTestsAllDosages({
	selectedTest,
	dbsLabs,
	leLabs,
}: {
	selectedTest: string,
  dbsLabs: any[],
  leLabs: any[]
}) {
	const testSource = selectedTest === 'DBS Labs' ? dbsLabs : leLabs;

	const labels: string[] = [];


  interface ntObject {
    [key: string]: number[],
    serotonin: number[],
    dopamine: number[]
  }

	const ntObj: ntObject = { serotonin: [], dopamine: [] };
	const dosagesList: string[][] = [];

	testSource.forEach((test) => {
		labels.push(new Date(test.date).toLocaleDateString());
		dosagesList.push([
			`5-htp: ${test['5-htp']}mg`,
			`L-dopa: ${test['L-dopa']}mg`,
			`Tyrosine: ${test['Tyrosine']}mg`,
		]);
		ntObj.serotonin.push(test.serotonin);
		ntObj.dopamine.push(test.dopamine);
	});

	const datasets = [];
	for (let nt in ntObj) {
		datasets.push(
			generateDataset({
				label: nt,
				data: ntObj[nt],
				yAxisID: 'left',
				dosagesList,
        point: false
			})
		);
	}

	return {
		labels,
		datasets,
	};
}

export default lineOneTestsAllDosages;

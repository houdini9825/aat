import generateDataset from '../generateDataset';

function lineTwoTestsDosages({
	selectedAminos,
	selectedTest,
	dbsLabs,
	leLabs,
}: {
	selectedAminos: string[],
  selectedTest: string,
  dbsLabs: any[],
  leLabs: any[]
}) {
	const testSource = selectedTest === 'DBS Labs' ? dbsLabs : leLabs;

	const labels: string[] = [];

  type ntObject = {
    [key: string]: number[],
    serotonin: number[],
    dopamine: number[]
  }

	const ntObj: ntObject = { serotonin: [], dopamine: [] };
	const dosagesObj: any = {};

	selectedAminos.forEach((amino) => {
		dosagesObj[amino] = [];
	});

	testSource.forEach((test) => {
		labels.push(test.date);
		selectedAminos.forEach((amino) => {
			dosagesObj[amino].push(test[amino]);
		});
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
        point: false,
        dosagesList: undefined
			})
		);
	}

	for (let amino in dosagesObj) {
		datasets.push(
			generateDataset({
				label: amino,
				data: dosagesObj[amino],
				yAxisID: 'right',
        point: false,
			})
		);
	}

	return {
		labels,
		datasets,
	};
}

export default lineTwoTestsDosages;

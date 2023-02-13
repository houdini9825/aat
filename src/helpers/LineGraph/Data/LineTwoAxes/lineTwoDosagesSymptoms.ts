import generateDataset from '../generateDataset';

function lineTwoDosagesSymptoms({
	selectedAminos,
	selectedTest,
}: {
	selectedAminos: string[],
  selectedTest: string,
}) {

	const labels: string[] = [];

	const dosagesObj: any = {};

	selectedAminos.forEach((amino) => {
		dosagesObj[amino] = [];
	});


	const datasets = [];

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

export default lineTwoDosagesSymptoms;

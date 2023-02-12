import generateDataset from '../generateDataset';

function lineOneDosagesAllDosages({
	selectedAminos,
	dosages,
	side,
}: {
	selectedAminos: any[],
	dosages: any[],
	side: string
}) {
	const labels: string[] = [];

	const dosagesObj: any = {};

	selectedAminos.forEach((opt) => {
		dosagesObj[opt] = [];
	});

	dosages.forEach((dose) => {
		dose.days.forEach((day: {date: string}) => {
			labels.push(new Date(day.date).toLocaleDateString())
			selectedAminos.forEach((opt) => {
				dosagesObj[opt].push(dose[opt]);
			});
		});
	});

	const datasets = [];

	for (let opt in dosagesObj) {
		datasets.push(
			generateDataset({
				label: opt,
				data: dosagesObj[opt],
				yAxisID: side,
				point: false
			})
		);
	}

	return {
		labels,
		datasets,
	};
}

export default lineOneDosagesAllDosages;

import generateDataset from '../generateDataset';

function lineOneSymptomsSpecificDosages({
	dosages,
	symptoms,
}: {
	dosages: any[],
  symptoms: string[]
}) {

	const labels = Array(
		dosages.reduce(
			(start, dose) => Math.max(dose.days.length, start),
			0
		)
	)
		.fill(null)
		.map((_, i) => i + 1);

	const datasets: any = [];

	dosages.forEach((dose) => {
		symptoms.forEach((symp) => {
			const data: number[] = [];
			dose.days.forEach((day: {symptomLogs: any[]}) => {
				data.push(day.symptomLogs[0].symptoms[symp]);
			});

			datasets.push(
				generateDataset({
					label: `${dose.dosageNumber} - ${symp}`,
					data,
					yAxisID: 'left',
          point: false,
				})
			);
		});
	});

	return {
		labels,
		datasets,
	};
}

export default lineOneSymptomsSpecificDosages;

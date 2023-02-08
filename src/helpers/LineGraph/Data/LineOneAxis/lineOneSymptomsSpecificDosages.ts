import generateDataset from '../generateDataset';

function lineOneSymptomsSpecificDosages({
	dosages,
	selectedDoses,
	symptoms,
}: {
	dosages: any[],
  selectedDoses: string[],
  symptoms: string[]
}) {
	const selectedDosages = dosages
		.filter((dose) => {
			return selectedDoses.includes(dose.dosageNumber);
		})
		.reverse();

	const labels = Array(
		selectedDosages.reduce(
			(start, dose) => Math.max(dose.days.length, start),
			0
		)
	)
		.fill(null)
		.map((_, i) => i + 1);

	const datasets: any = [];

	selectedDosages.forEach((dose) => {
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

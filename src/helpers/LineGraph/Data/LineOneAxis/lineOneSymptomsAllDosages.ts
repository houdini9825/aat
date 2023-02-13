import generateDataset from '../generateDataset';

function lineOneSymptomsAllDosages({
	symptoms,
	dosages,
	side,
}: {
	symptoms: string[],
  dosages: any[],
  side: string
}) {
	console.log(dosages)
	const labels: string[] = [];

	const selectedSymptomsObject: any = {};

	symptoms.forEach((symp) => {
		selectedSymptomsObject[symp] = [];
	});

	const dosagesList: string[][] = [];

	dosages.forEach((dose) => {
		dose.days.forEach((day: {date: string, symptomLogs: any[], dayNumber: number}) => {
			labels.push(new Date(day.date).toLocaleDateString());
			symptoms.forEach((symp) => {
				selectedSymptomsObject[symp].push(
					day.symptomLogs[0].symptoms[symp]
				);
				dosagesList.push([
					`Day ${day.dayNumber}`,
					`5-htp: ${dose['5-htp']}mg`,
					`L-dopa: ${dose['L-dopa']}mg`,
					`Tyrosine: ${dose['Tyrosine']}mg`,
				]);
			});
		});
	});

	const datasets = [];
	for (let symp in selectedSymptomsObject) {
		datasets.push(
			generateDataset({
				label: symp,
				data: selectedSymptomsObject[symp],
				yAxisID: side,
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

export default lineOneSymptomsAllDosages;

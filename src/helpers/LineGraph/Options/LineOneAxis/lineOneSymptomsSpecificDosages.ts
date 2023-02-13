import generateOptions from '../generateOptions';
import generateScale from '../generateScale';

function lineOneSymptomsSpecificDosages({
	dosages,
	selectedDoses,
}: {
	dosages: any[],
	selectedDoses: string[]
}) {
	const selectedDosages = dosages
		.filter((dose) => selectedDoses.includes(dose.dosageNumber))
		.reverse();

	const titleText = selectedDosages.map((dose) => {
		return `${dose.dosageNumber}. 5-htp: ${dose['5-htp']}mg - L-dopa: ${dose['L-dopa']}mg - Tyrosine: ${dose['Tyrosine']}mg`;
	});

	const scales = {
		left: generateScale({
			position: 'left',
			text: '<-- Less severe - More severe -->',
			stepSize: 1,
			max: 5,
		}),
		x: {
			ticks: {
				autoSkip: true,
				maxRotation: 0,
				font: { size: 10 },
			},
			title : {
				text: 'Day Number',
				display: true,
				padding: 10
			}
		},
	};

	const titleCallback = (ctx: any[]) => {
		return `Day ${ctx[0].label}`;
	};

	const options = generateOptions({ titleText, scales, titleCallback });

	return options;
}

export default lineOneSymptomsSpecificDosages;

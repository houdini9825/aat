const generateScale = ({
	position,
	max,
	text,
	stepSize,
}: {
	position: string,
	max?: number,
	text: string,
	stepSize?: number
}) => {
	return {
		type: 'linear',
		display: true,
		position,
		grid: {
			drawOnChartArea: false,
		},
		beginAtZero: true,
		min: 0,
		max,
		title: {
			color: 'black',
			display: true,
			text,
			font: { size: 16 },
		},
		ticks: {
			stepSize,
		},
	};
};

export default generateScale;

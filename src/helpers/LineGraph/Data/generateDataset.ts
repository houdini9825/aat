import distinctColors from 'distinct-colors';




let randomColors: any[] = [
	'red',
	'blue',
	'green',
	'orange',
	'purple',
	'teal',
	'black',
	'grey',
	'brown',
	'lime',
	'pink',
]

randomColors = randomColors.concat(distinctColors({ count: 50 }));

const generateDataset = ({
	label,
	data,
	yAxisID,
	dosagesList,
	point,
}: {
	label: string | string[],
  data: any[],
  yAxisID: string,
  dosagesList?: string[][],
  point: boolean
}) => {
	return {
		label,
		dosagesList,
		data,
		borderColor: randomColors,
		backgroundColor: randomColors,
		pointBorderColor: point ? 'black' : 'transparent',
		pointBorderWidth: point ? 2 : 0,
		pointBackgroundColor: point ? 'black' : 'transparent',
		yAxisID,
		borderDash: yAxisID === 'right' ? [5, 5] : [0, 0],
	};
};

export default generateDataset;

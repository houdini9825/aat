const generateOptions = ({
	titleText,
	scales,
	titleCallback,
}: {
	titleText: string | string[],
	scales: {},
	titleCallback?: ((ctx: any[]) => string | string[])
}) => {
	return {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: titleText,
			},
			tooltip: {
				yAlign: 'bottom',
				padding: 10,
				callbacks: {
					title: (context: any) => {
						return titleCallback
							? titleCallback(context)
							: context[0].label.split(',');
					},
				},
			},
		},
		scales,
		parsing: {
			yAxisKey: 'left',
		},
	};
};

export default generateOptions;

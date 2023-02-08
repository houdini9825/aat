import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.scss'
import useLineOptions from '../../../hooks/use-line-options'
import useLineData from '../../../hooks/use-line-data'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);


function LineChart() {
  const data: any = useLineData()
	const options: any = useLineOptions()



	return (
		<div className={styles.container}>
      <Line options={options} data={data} />
		</div>
	);
}

export default LineChart;

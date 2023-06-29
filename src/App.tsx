import { Fragment } from 'react';
import Form from './components/Form/Form';
import LineChart from './components/Display/LineChart/LineChart'
import './App.scss'
import Table from './components/Display/Table/Table';
import { useSelector } from 'react-redux';

function App() {
	const {chartType: {selectedChartId}, patientData} = useSelector((state: StateObject) => state)

	return (
		<Fragment>
			<Form />
			{selectedChartId === 'tableOne' ? <Table data={patientData.leLabs}/> : selectedChartId === 'tableTwo' ? <Table data={patientData.p2LeLabs}/> : <LineChart />}
		</Fragment>
	);
}

export default App;

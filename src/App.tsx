import { Fragment } from 'react';
import Form from './components/Form/Form';
import LineChart from './components/Display/LineChart/LineChart'
import './App.scss'

function App() {
	return (
		<Fragment>
			<Form />
			<LineChart />
		</Fragment>
	);
}

export default App;

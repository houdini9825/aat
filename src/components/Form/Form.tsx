import ChartType from './ChartType/ChartType';
import YAxisChoices from './YAxisChoices/YAxisChoices'
import styles from './Form.module.scss';
import { useSelector } from 'react-redux';
import SymptomsList from './SymptomsList/SymptomsList';
import DosageChoices from './DosageChoices/DosageChoices'
import TimePeriod from './TimePeriod/TimePeriod';
import TestsList from './TestsList/TestsList';
import SortBy from './Sort/SortBy';

function Form() {
	const { selectedChartId } = useSelector((state: {chartType: {selectedChartId: string}}) => {
		return state.chartType;
	});
	const { selectedAxisChoices } = useSelector((state: {YAxisChoices: {selectedAxisChoices: string | string[]}}) => {
		return state.YAxisChoices;
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<ChartType />
			<YAxisChoices multiLine={selectedChartId === 'lineTwo'} />
			{selectedAxisChoices.includes('NT Tests') && <TestsList />}
			{selectedAxisChoices.includes('Symptoms') && <SymptomsList />}
			{selectedAxisChoices.includes('Dosages') && <DosageChoices />}
		<TimePeriod />
		<SortBy />
		</form>
	);
}

export default Form;

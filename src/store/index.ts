import { configureStore } from '@reduxjs/toolkit';
import { changeSelectedSymptoms, symptomsReducer } from './slices/symptomsSlice';
import {
	chartTypeReducer,
	changeSelectedType
} from './slices/chartTypeSlice';

import {
	changeSelectedAxisChoices,
	YAxisChoicesReducer,
} from './slices/yAxisChoicesSlice';

import { patientDataReducer } from './slices/patientDataSlice';

import {changeAminoOption, dosageOptionsReducer} from './slices/dosageOptionsSlice'

import {changeAllDosages, timePeriodReducer, updateSelectedDoses, updateSpecificTimeFrame, updateDosageRange} from './slices/timePeriodSlice'

import {changeSelectedTest, testsListReducer} from './slices/testsListSlice'

import {changeDirection, changeEntity, sortedByReducer} from './slices/sortedBySlice'

const store = configureStore({
	reducer: {
		symptoms: symptomsReducer,
		chartType: chartTypeReducer,
		YAxisChoices: YAxisChoicesReducer,
		patientData: patientDataReducer,
		dosageOptions: dosageOptionsReducer,
		timePeriod: timePeriodReducer,
		testsList: testsListReducer,
		sortedBy: sortedByReducer
	},
});

export { store };
export { changeSelectedType };
export {changeAminoOption}
export {changeSelectedTest}
export {changeAllDosages, updateSelectedDoses, updateSpecificTimeFrame, updateDosageRange}
export { changeSelectedAxisChoices };
export { changeSelectedSymptoms };
export {changeDirection, changeEntity}

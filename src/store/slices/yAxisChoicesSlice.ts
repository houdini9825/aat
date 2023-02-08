import { createSlice } from '@reduxjs/toolkit';
import {changeSelectedType} from '..'


const YAxisChoicesSlice = createSlice({
	name: 'YAxisChoices',
	initialState: {
		selectedAxisChoices: ['Symptoms']
	},
	reducers: {
		changeSelectedAxisChoices(state, action) {
			if (typeof action.payload === 'string' || action.payload.length < 3) {
				state.selectedAxisChoices = action.payload
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(changeSelectedType, (state, action) => {
			state.selectedAxisChoices = ['Symptoms']
		})
	}
});

export const {
	changeSelectedAxisChoices
} = YAxisChoicesSlice.actions;
export const YAxisChoicesReducer = YAxisChoicesSlice.reducer;

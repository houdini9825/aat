import {createSlice} from '@reduxjs/toolkit'


const chartTypeSlice = createSlice({
  name: 'chartType',
  initialState: {
    selectedName: ['Line Graph 1 Axis'],
    selectedChartId: 'lineOne'
  },
  reducers: {
    changeSelectedType(state, action) {
      state.selectedName = [action.payload.name]
      state.selectedChartId = action.payload.id
    }
  }
})

export const { changeSelectedType} = chartTypeSlice.actions
export const chartTypeReducer = chartTypeSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const symptomsSlice = createSlice({
  name: 'symptoms',
  initialState: {
    selectedSymptoms: ['overall']
  },
  reducers: {
    changeSelectedSymptoms(state, action) {
      state.selectedSymptoms = action.payload
    }
  }
})

export const {changeSelectedSymptoms} = symptomsSlice.actions
export const symptomsReducer = symptomsSlice.reducer
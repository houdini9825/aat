import { createSlice } from "@reduxjs/toolkit";

const dosageOptionsSlice = createSlice({
  name: 'dosageOptions',
  initialState: {
    selectedAminos: ['5-htp', 'L-dopa']
  },
  reducers: {
    changeAminoOption(state, action) {
      state.selectedAminos = action.payload
    }
  }
})

export const {changeAminoOption} = dosageOptionsSlice.actions
export const dosageOptionsReducer = dosageOptionsSlice.reducer
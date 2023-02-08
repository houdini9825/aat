import {createSlice} from '@reduxjs/toolkit'

const testsListSlice = createSlice({
  name: 'testsList',
  initialState: {
    selectedTest: 'Life Extension'
  },
  reducers: {
    changeSelectedTest(state, action) {
      state.selectedTest = action.payload
    }
  }
})


export const {changeSelectedTest} = testsListSlice.actions
export const testsListReducer = testsListSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import Data from '../../test.json'

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    ...Data.patients[0]
  },
  reducers: {}
})


export const patientDataReducer = patientDataSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import Data from '../../newData.json'

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    ...Data.patients[0]
  },
  reducers: {}
})


export const patientDataReducer = patientDataSlice.reducer
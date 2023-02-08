import { createSlice } from "@reduxjs/toolkit";

const sortedBySlice = createSlice({
  name: 'sortedBy',
  initialState: {
    direction: 'ascending',
    entity: 'Date'
  },
  reducers: {
    changeDirection(state, action) {
      state.direction = action.payload
    },
    changeEntity(state, action) {
      state.entity = action.payload
    }
  }
})

export const {changeDirection, changeEntity} = sortedBySlice.actions
export const sortedByReducer = sortedBySlice.reducer
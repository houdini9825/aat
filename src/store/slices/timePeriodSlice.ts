import { createSlice } from "@reduxjs/toolkit";
import {changeSelectedAxisChoices, changeSelectedTest, changeSelectedType} from '..'

const matchExternalActions = (action: any) => {
  const externalActions = [changeSelectedAxisChoices, changeSelectedTest, changeSelectedType]

  return externalActions.findIndex(ext => action.type === ext.type) !== -1
}

const startingState: TimePeriodState = {
  allDosages: false,
  selectedDoses: [],
  dateRange: {
    active: false,
    start: '',
    end: ''
  },
  specificTimeFrame: [],
  dosageRange: {
    active: false,
    '5-htp': {
      active: false,
      start: 0,
      end: 0
    },
    'L-dopa': {
      active: false,
      start: 0,
      end: 0
    },
    'Tyrosine': {
      active: false,
      start: 0,
      end: 0
    }
  }
}

const timePeriodSlice = createSlice({
  name: 'timePeriod',
  initialState: startingState,
  reducers: {
    changeAllDosages(state, action) {
      state.allDosages = !state.allDosages
      if (state.allDosages) {
        state.selectedDoses = []
        state.dateRange.active = false
        state.dosageRange.active = false
      }
    },
    updateSelectedDoses(state, action) {
      state.allDosages = false
      state.dateRange.active = false
      state.selectedDoses = action.payload
      state.dosageRange.active = false
    },
    updateSpecificTimeFrame(state, action) {
      state.allDosages = false
      state.dateRange.active = false
      state.selectedDoses = []
      state.dosageRange.active = false
      state.specificTimeFrame = action.payload
    },
    updateDosageRange(state, action: {payload: {amino: string, start: number, end: number}}) {
      state.allDosages = false
      state.dateRange.active = false
      state.selectedDoses = []
      state.specificTimeFrame = []
      state.dosageRange.active = true

      for (let acid in state.dosageRange) {
        if (acid !== 'active') {
          state.dosageRange[acid].active = false
          state.dosageRange[acid].start = 0
          state.dosageRange[acid].end = 0
        }
      }

      state.dosageRange[action.payload.amino] = {
        active: true,
        start: action.payload.start,
        end: action.payload.end
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(matchExternalActions, (state, action) => {
      state.allDosages = false
      state.dateRange.active = false
      state.dosageRange.active = false
      state.selectedDoses = []
    })
  }
})

export const {changeAllDosages, updateSelectedDoses, updateSpecificTimeFrame, updateDosageRange} = timePeriodSlice.actions
export const timePeriodReducer = timePeriodSlice.reducer
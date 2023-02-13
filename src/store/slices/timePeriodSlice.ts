import { createSlice } from "@reduxjs/toolkit";
import {changeSelectedAxisChoices, changeSelectedTest, changeSelectedType} from '..'

const matchExternalActions = (action: any) => {
  const externalActions = [changeSelectedAxisChoices, changeSelectedTest, changeSelectedType]

  return externalActions.findIndex(ext => action.type === ext.type) !== -1
}

const startingState: TimePeriodState = {
  filterChoice: 'specific dosages',
  selectedDoses: [],
  dateRange: {
    start: '',
    end: ''
  },
  specificTimeFrame: '',
  specificYears: [],
  dosageRange: {
    selectedAminos: [],
    '5-htp': {
      start: '',
      end: ''
    },
    'L-dopa': {
      start: '',
      end: ''
    },
    'Tyrosine': {
      start: '',
      end: ''
    }
  }
}

const cleanState = (state: TimePeriodState) => {
  state.selectedDoses = []
  state.filterChoice = ''
  state.dateRange = {start: '', end: ''}
  state.specificTimeFrame = ''
  state.specificYears = []
  state.dosageRange = {
    selectedAminos: [],
    '5-htp': {
      start: '',
      end: ''
    },
    'L-dopa': {
      start: '',
      end: ''
    },
    'Tyrosine': {
      start: '',
      end: ''
    }
  }
}

const timePeriodSlice = createSlice({
  name: 'timePeriod',
  initialState: startingState,
  reducers: {
    changeFilterChoice(state, action) {
      cleanState(state)
      state.filterChoice = action.payload
    },
    updateSelectedDoses(state, action) {
      state.selectedDoses = action.payload.map((num: any) => String(num))
    },
    updateSpecificTimeFrame(state, action) {
      state.specificTimeFrame = action.payload
    },
    updateDosageRange(state, action: {payload: {amino: string, start?: string, end?: string}}) {
      if (action.payload.start !== undefined) {
        state.dosageRange[action.payload.amino].start = action.payload.start
      }
      if (action.payload.end !== undefined) {
        state.dosageRange[action.payload.amino].end = action.payload.end
      }
    },
    updateSpecificYears(state, action) {
      state.specificYears = action.payload
    },
    updateDateRange(state, action) {
      state.dateRange.start = action.payload.start
      state.dateRange.end = action.payload.end
    },
    updateDosageSelection(state, action) {
      state.dosageRange.selectedAminos = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(matchExternalActions, (state, action) => {
      cleanState(state)
    })
  }
})

export const {changeFilterChoice, updateSelectedDoses, updateSpecificTimeFrame, updateDosageRange, updateSpecificYears, updateDateRange, updateDosageSelection} = timePeriodSlice.actions
export const timePeriodReducer = timePeriodSlice.reducer
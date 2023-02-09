declare type TimePeriodState = {
  filterChoice: string,
  selectedDoses: string[],
  dateRange: {
    start: string,
    end: string
  },
  specificTimeFrame: string,
  specificYears: string[],
  dosageRange: {
    [key: string]: any,
    selectedAminos: string[],
    '5-htp': DosageRangeObject,
    'L-dopa': DosageRangeObject,
    'Tyrosine': DosageRangeObject
  }
}

declare type DosageRangeObject = {
  [key: string]: any,
  start: string,
  end: string
}
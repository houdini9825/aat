declare type TimePeriodState = {
  allDosages: boolean,
  selectedDoses: string[],
  dateRange: {
    active: boolean,
    start: string,
    end: string
  },
  specificTimeFrame: string[],
  dosageRange: {
    [key: string]: any,
    active: boolean,
    '5-htp': DosageRangeObject,
    'L-dopa': DosageRangeObject,
    'Tyrosine': DosageRangeObject
  }
}

declare type DosageRangeObject = {
  [key: string]: any,
  active: boolean,
  start: number,
  end: number
}
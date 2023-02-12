const validAnalytes = ['5-htp', 'L-dopa', 'Tyrosine']

function FilterByDosageAmount(data: (TestsObject | DosageObject)[], analyte: string, start: number, end: number) {

  if (!validAnalytes.includes(analyte)) return data

  return data.filter(test => {
    return test[analyte] >= start && test[analyte] <= end
  })
}


export default FilterByDosageAmount
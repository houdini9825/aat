

function FilterBySpecificDosage(data: DosageObject[], dosageNumbers: number[]) {
  return data.filter(dose => {
    return dosageNumbers.includes(dose.dosageNumber)
  })
}

export default FilterBySpecificDosage
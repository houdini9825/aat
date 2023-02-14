

function FilterBySpecificDosage(data: DosageObject[], dosageNumbers: string[]) {
  return data.filter(dose => {
    return dosageNumbers.includes(String(dose.dosageNumber))
  })
}

function FilterBySpecificTest(data: TestsObject[], dates: string[]) {
  return data.filter(test => {
    return dates.includes(test.date)
  })
}


export {FilterBySpecificTest, FilterBySpecificDosage}


function FilterTestsByYears(data: TestsObject[], years: number[]) {
  return data.filter(test => {
    return years.includes(new Date(test.date).getFullYear())
  })
}

function FilterDosagesByYears(data: DosageObject[], years: number[]) {
  return data.filter(dose => {
    return years.includes(new Date(dose.days[0].date).getFullYear())
  })
}

export {FilterDosagesByYears, FilterTestsByYears}
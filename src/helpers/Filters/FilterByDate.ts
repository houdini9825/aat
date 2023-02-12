

function FilterTestsByDate(data: TestsObject[], startDate: Date, endDate: Date) {
  const startDateMil = startDate.getTime()
  const endDateMil = endDate.getTime()


  return data.filter(test => {
    const testDateMil = new Date(test.date).getTime()
    return testDateMil >= startDateMil && testDateMil <= endDateMil
  })
  
}

function FilterDosagesByDate(data: DosageObject[], startDate: Date, endDate: Date) {
  const startDateMil = startDate.getTime()
  const endDateMil = endDate.getTime()


  return data.filter(dose => {
    const doseStartDate = new Date(dose.days[0].date).getTime()
    const doseEndDate = new Date(dose.days[dose.days.length-1].date).getTime()

    return (doseStartDate >= startDateMil && doseStartDate <= endDateMil) || (doseEndDate >= startDateMil && doseEndDate <= endDateMil)
  })
}

export {FilterTestsByDate, FilterDosagesByDate}
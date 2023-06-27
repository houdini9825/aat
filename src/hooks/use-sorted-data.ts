import {useSelector} from 'react-redux'

const aminoAcids = ['5-htp', 'L-dopa', 'Tyrosine']
const nts = ['dopamine', 'serotonin']

function useSortedData(data: (TestsObject| DosageObject)[]): (TestsObject | DosageObject)[] {
  const cleanedData = [...data]
  const {direction, entity} = useSelector((state: StateObject) => state.sortedBy)

  const isDosageObject = (x: any): x is DosageObject[] => x[0].days;


  const directionIsAsc = direction === 'ascending'

  if (entity === 'Date') {
    return directionIsAsc ? cleanedData : cleanedData.reverse()
  }

  if (aminoAcids.includes(entity) || nts.includes(entity)) {
    return cleanedData.sort((doseOne, doseTwo) => {
      return directionIsAsc ? doseOne[entity] - doseTwo[entity] : doseTwo[entity] - doseOne[entity]
    })
  }

  return data
}

export function useTest() {
  const patientData = useSelector((state: any) => state.patientData)
  const newData = useSortedData(patientData.dosages)

}



export default useSortedData
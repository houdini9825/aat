import useSortedData from "./use-sorted-data";
import useFilteredData from "./use-filtered-data";

function useSortedFilteredData(data: (DosageObject | TestsObject)[]) {
  const filteredData = useFilteredData(data)
  console.log(filteredData)
  const filteredSortedData = useSortedData(filteredData)

  return filteredSortedData
}

export default useSortedFilteredData
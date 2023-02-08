import generateOptions from "../generateOptions";
import generateScale from "../generateScale";

function lineTwoDosagesSymptomsAllDosages() {
  const scales = {
    left: generateScale({
      position: 'left',
      text: '<-- Less severe - More severe -->',
      max: 5,
      stepSize: 1,
    }),
    right: generateScale({ position: 'right', text: 'milligrams' }),
  };

  const options = generateOptions({
    titleText: 'All dosages with symptoms',
    scales,
  });

  return options;
}

export default lineTwoDosagesSymptomsAllDosages
import generateOptions from "../generateOptions";
import generateScale from "../generateScale";

function lineOneDosagesAllDosages() {
  const scales = {
    left: generateScale({ position: 'left', text: 'milligrams' }),
  };

  const options = generateOptions({ titleText: 'All dosages', scales});

  return options;
}

export default lineOneDosagesAllDosages
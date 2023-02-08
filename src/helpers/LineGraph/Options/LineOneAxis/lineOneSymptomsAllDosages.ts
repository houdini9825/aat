import generateOptions from "../generateOptions";
import generateScale from "../generateScale";

function lineOneSymptomsAllDosages() {
  const scales = {
    left: generateScale({
      position: 'left',
      max: 5,
      text: '<-- Less severe - More severe -->',
      stepSize: 1,
    }),
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        font: {size: 10}
      }
    }
  };

  const titleCallback = (ctx: any[]): string | string[] => {
    return [ctx[0].label].concat(ctx[0].dataset.dosagesList[ctx[0].dataIndex])
  }

  const options = generateOptions({ titleText: 'All dosages', scales, titleCallback });

  return options;
}

export default lineOneSymptomsAllDosages
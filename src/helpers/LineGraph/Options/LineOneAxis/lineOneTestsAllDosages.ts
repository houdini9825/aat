import generateOptions from '../generateOptions'
import generateScale from '../generateScale'

function lineOneTestsAllDosages({selectedTest}: {selectedTest: string}) {
  const titleText = selectedTest === 'DBS Labs' ? 'DBS Labs Tests' : 'Life Extension Tests'
		
		const scales = {
			left: generateScale({
				position: 'left',
				text: 'ug/g creatinine',
			}),
			x: {
				ticks: {
					autoSkip: true,
					maxRotation: 0,
					font: {size: 10}
				}
			}
		};

		const titleCallback = (ctx: any[]) => {
			return [ctx[0].label].concat(ctx[0].dataset.dosagesList[ctx[0].dataIndex])
		}

		const options = generateOptions({ titleText , scales, titleCallback });

		return options;
}

export default lineOneTestsAllDosages
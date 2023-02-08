import generateOptions from "../generateOptions";
import generateScale from "../generateScale";

function lineTwoTestsDosages({selectedTest}: {selectedTest: string}) {
  const titleText = selectedTest === 'DBS Labs' ? 'DBS Labs tests with dosages' : 'Life Extension tests with dosages'
		
		const scales = {
			left: generateScale({
				position: 'left',
				text: 'ug/g creatinine',
			}),
			right: generateScale({
				position: 'right',
				text: 'milligrams'
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
			return ctx[0].label
		}

		const options = generateOptions({ titleText , scales, titleCallback });

		return options;
}

export default lineTwoTestsDosages
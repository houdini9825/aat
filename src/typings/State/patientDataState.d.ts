declare type PatientObject = {
  patientId: number,
  dob: string,
  allSymptoms: string[],
  dbsLabs: TestsObject[],
  leLabs: TestsObject[],
  dosages: DosageObject[]
}

declare type TestsObject = {
	[key: string]: any,
	date: string;
	'5-htp': number;
	'L-dopa': number;
	Tyrosine: number;
	serotonin: number;
	dopamine: number;
};

declare type DosageObject = {
	[key: string]: any,
	dosageNumber: number;
	'5-htp': number;
	'L-dopa': number;
	Tyrosine: number;
	days: DosageDayObject[];
};

declare type DosageDayObject = {
	date: string;
	dayNumber: number;
	symptomLogs: SymptomsObject[]
};

declare type SymptomsObject = {
  time: string,
  symptoms: {
    [key: string]: number
  }
}
import pyperclip, datetime, json

dosage = {
  "dosageNumber": 285,
  "5-htp": 2100,
  "L-dopa": 840,
  "Tyrosine": 9500,
  "days": []
}

obj = {
  "date": "2023-02-02T00:00:00",
  "dayNumber": 1,
  "symptomLogs": [
    {
      "time": "8:00",
      "symptoms": {
        "overall": 2.5,
        "cognition": 2.5,
        "depression": 2.5,
        "fatigue": 3.25,
        "bs": 2.5,
        "headache": 1,
        "unwellness": 0.5,
        "nausea": 0
      }
    }
  ]
}


day = datetime.timedelta(1)

prev = obj


for i in range(14):
  dosage['days'].append(prev)
  copy = prev.copy()
  dateSplit = [int(x) for x in copy['date'].split('T')[0].split('-')]
  copy['date'] = (datetime.datetime(dateSplit[0], dateSplit[1], dateSplit[2]) + day).isoformat()
  copy['dayNumber'] += 1
  prev = copy

pyperclip.copy(json.dumps(dosage))
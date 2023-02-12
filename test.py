import json, datetime


data = None

with open('test.json', 'r') as f:
  data = json.load(f)


for test in data['patients'][0]['leLabs']:
  date_info = test['date'].split('-')
  test['date'] = datetime.datetime(int('20'+date_info[-1]), int(date_info[0]), int(date_info[1])).isoformat()
for test in data['patients'][0]['dbsLabs']:
  date_info = test['date'].split('-')
  test['date'] = datetime.datetime(int('20'+date_info[-1]), int(date_info[0]), int(date_info[1])).isoformat()

for test in data['patients'][0]['dosages']:
  for day in test['days']:
    date_info = day['date'].split('-')
    day['date'] = datetime.datetime(int('20'+date_info[-1]), int(date_info[0]), int(date_info[1])).isoformat()



with open('newData.json', 'w') as f:
  f.write(json.dumps(data))
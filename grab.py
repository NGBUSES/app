import requests
headers = {
    'AccountKey': 'ZbYb7MbXREWqZP7RDI6dbg==',
    'accept': 'application/json'
}
def fetch_all(url):
    results = []
    while True:
        new_results = requests.get(
            url,
            headers=headers,
            params={'$skip': len(results)}
        ).json()['value']
        if new_results == []:
            break
        else:
            results += new_results
    return results
stops = new_results = requests.get(
            #"http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139",
            #"http://datamall2.mytransport.sg/ltaodataservice/BusRoutes",
            #"http://datamall2.mytransport.sg/ltaodataservice/BusStops",
            headers=headers,
            ).json()
f = open('stops.json','w')
f.write('var r='+str(stops))
f.close()

import json


def read_json(fPath):
    try:
        with open(fPath, 'r') as f:
            json_data = json.load(f)
            return json_data
    except:
        print(f'file not found')
        return None


# Press the green button in the gutter to run the script.
if __name__ == '__main__':

    # read json data
    file_path = 'co2data_construction.json'
    jsonData = read_json(file_path)

    # resource data
    resData = jsonData.get('Resources')  # list

    # filter data
    filtered_data = []
    for res in resData:
        # get Name
        # get DataItems
        # get PropertyUnitCode
        # get DataValueItems
        data_point = [res['Name'], res['DataItems']['PropertyUnitCode'],
                      [x['Value'] for x in res['DataItems']['DataValueItems']]]

        filtered_data.append(data_point)

    # save json
    with open('extracted_data.json', 'w') as f:
        json.dump(filtered_data, f)

    filtered_json = read_json('extracted_data.json')
    # read json
    for data_point in filtered_data:
        name, metric, values = data_point
        print(f'Name : {name}')
        print(f'Metric : {metric}, Values: {values}')

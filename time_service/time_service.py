from sklearn.neighbors import NearestNeighbors
import numpy as np

from flask import g
from flask import Flask

from jsonschema import validate
import json

import datetime
from datetime import datetime

from datetime import date

from functools import wraps
from flask import (
    current_app,
    jsonify,
    request
)

app = Flask(__name__)

rows=['durchfallerbrechen']


knn_models = {}
knn_model_data = {"1":[],
"2":[],
"3":[],
"4":[],
"5":[],
"6":[]}

weighting = [0.75,0.15,0.08,0.02]

urgencies = ["1","2","3","4","5"]


# urgency (1=red),...,(5=blue),  diagnosis, day, time of day in seconds (0 to 86400),auslastungsfactor percent, waiting time in seconds, 
data_set = np.array([

[1, 43, 4, 25000, 20,3600],
[1, 1, 5, 25700, 80,600],
[1, 2, 6, 25900, 10,300],
[1, 3, 1, 50000, 50,800],
[1, 4, 2, 60000, 10, 2800],
[1,10,3,30000,0,30],

[2, 29, 4, 25000, 15, 3600],
[2, 3, 5, 25700, 20,4600],
[2, 45, 6, 25900, 30,5000],
[2, 8, 1, 50000, 40,1200],
[2, 18, 2, 60000, 50,3000],


[3, 29, 4, 25000, 15, 3600],
[3, 3, 5, 25700, 20,4600],
[3, 45, 6, 25900, 30,5000],
[3, 8, 1, 50000, 40,1200],
[3, 18, 2, 60000, 50,3000],


[4, 29, 4, 25000, 15, 3600],
[4, 3, 5, 25700, 20,4600],
[4, 45, 6, 25900, 30,5000],
[4, 8, 1, 50000, 40,1200],
[4, 18, 2, 60000, 50,3000],


[5, 29, 4, 25000, 15, 18450],
[5, 3, 5, 25700, 20,17450],
[5, 45, 6, 25900, 30,19450],
[5, 8, 1, 50000, 40,16150],
[5, 18, 2, 60000, 50,12450],

[6, 29, 4, 25000, 3600,15],
[6, 3, 5, 25700, 4600,20],
[6, 45, 6, 25900, 5600,30],
[6, 8, 1, 50000, 2600,40],
[6, 18, 2, 60000, 2600,50]])

print(data_set)

      
# urgency (1=red),...,(5=blue),  diagnosis, day, time of day, waiting time
def train(data_set):
      
      #sort by urgency
      for data_point in data_set:
            knn_model_data[str(data_point[0])].append(data_point)#
      
      
      
      for i in urgencies:
            # norm data
            x_normed = np.array(knn_model_data[i]) / np.array(knn_model_data[i]).max(axis=0)
            
            x_normed = x_normed[:,1:-1]
            print(x_normed)
            
            #priotizing:
            x_normed[:,0] *= (1/8.0)
            x_normed[:,3] *= (2)
            print(x_normed)
            
            model = NearestNeighbors(n_neighbors=len(weighting))
            model.fit(x_normed)
            knn_models[i] = model





def estimate(data_point):

      x_normed = np.array(  data_point[1:-1]) / (np.array(knn_model_data[str(data_point[0])])[:,1:-1]).max(axis=0)
      print(x_normed)
      
      #priotizing:
      x_normed[0] *= (1/8.0)
      x_normed[3] *= (2)
      print(x_normed)
      
      result = knn_models[str(data_point[0])].kneighbors( x_normed.reshape(1, -1),return_distance=True)
      
      time = 0
      
      for res,weight in zip(result[1][0],weighting):
            #print(res)
            #print(knn_model_data[str(data_point[0])][res][-1])
            time = time + weight * knn_model_data[str(data_point[0])][res][-1]
      print(result)
      print(time)
      return time


@app.route('/time', methods=['GET'])
def login():
    category = int(request.args.get('category', ''))
    diagnosis = int(request.args.get('diagnosis', ''))
    day = int(request.args.get('day', ''))
    time = int(request.args.get('time', ''))
    auslastung = int(request.args.get('auslastung', ''))
    out = estimate(np.array([category,diagnosis,day,time,auslastung,0]))
    print("out "+str(out))
    
    return str(out)
    

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

train(data_set)


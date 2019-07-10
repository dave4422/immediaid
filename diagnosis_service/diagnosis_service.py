import sqlite3
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


#veraendern weil von stack overflow...

def validate_json(f):
    @wraps(f)
    def wrapper(*args, **kw):
        try:
            request.json
        except BadRequest as e:
            msg = "payload must be a valid json"
            return jsonify({"error": msg}), 400
        return f(*args, **kw)
    return wrapper
    
#veraendern weil von stack overflow...

def validate_schema(schema_name):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kw):
            try:
                with open(schema_name, 'r') as file_handle:
                    schm = json.load(file_handle)
                validate(request.json, schm)
            except Exception as e:
                print(str(e))
                return jsonify({"error": e.message}), 400
            return f(*args, **kw)
        return wrapper
    return decorator


DATABASE = 'diagnosis'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def calculate_age(born):
    today = date.today()
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

@app.route('/test/<uuid>', methods=['POST'])
@validate_json
@validate_schema('diagnosis_request_schema')
def get_diagnosis(uuid):
    content = request.json
    
    query_string = 'select * from diagnosises'
    params = []
    
    #constrcut query:
     
    query_string += ' WHERE DateOfBirthMin < ? AND DateOfBirthMax > ?'

    params.append(str(calculate_age(datetime.strptime(content['age'],"%Y-%m-%dT%H:%M:%S.%fZ"))))
    params.append(str(calculate_age(datetime.strptime(content['age'],"%Y-%m-%dT%H:%M:%S.%fZ"))))
    
    print('age '+ str(calculate_age(datetime.strptime(content['age'],"%Y-%m-%dT%H:%M:%S.%fZ"))))
    
    query_string += ' AND (Sex = ? OR Sex IS NULL)'
    
    params.append(content['sex'])
    
    query_string += ' AND (Area = ?)'
    
    params.append(content['location'])
    
    
    if 'matches' in content:
        for x, y in content['matches'].items():
            query_string += ' AND ? = ?'
            
            params.append(str(x))
            params.append(str(y))
    
    print(query_string)
    res = query_db(query_string,params)
                
    
    for value in res:
        print(value['Name'])
    
    #print(content)
    #print(uuid)
    
    if len(res) == 1:
        return jsonify(
        id=content['id'],
        error_code=0,
        result=res[0]['Name']
        )
    if len(res) == 0:
        return jsonify(
        id=content['id'],
        error_code=2
        )
    else:
        questions = []
        #if there are at least 2 distinct values per row use this trait
        for row in rows:
            query_string_new = 'SELECT DISTINCT '+row+' FROM (' + query_string + ')'
            res_new = query_db(query_string_new,params)
            
            if len(res_new) >= 2:
                questions.append(row)
                
        
        
        
        if len(questions) == 0:
            return jsonify(
            id=content['id'],
            error_code=2
            )
        else:
            return jsonify(
            id=content['id'],
            error_code=1,
            questions=questions
            )
    
    
    
def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    print(cur)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

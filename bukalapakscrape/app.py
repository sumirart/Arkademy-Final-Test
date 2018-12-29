from flask import Flask, request, Response, json
from flask_cors import CORS
from scrap import *

app = Flask(__name__)
CORS(app)


@app.route('/bukalapak/<int:page>', methods=['GET'])
def All(page):
    a = getAll(page)
    return Response(a, mimetype='application/json')
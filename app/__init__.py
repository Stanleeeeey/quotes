from flask import Flask, render_template, json
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("main.html")


@app.route('/random')
def random():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/data", "taiwan.json")
    data = json.load(open(json_url))
    print(data)
app.run()
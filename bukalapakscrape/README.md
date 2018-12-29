# Scrape Bukalapak with BeautifulSoap4 auto save to DB

Scrape products in Bukalapak using BeautifulSoup4 , Requests, flask and save with mysqlclient
bukapalak url = "https://m.bukalapak.com/c/handphone?from=category_home&page={}&search%5Bkeywords%5D="

## Installation Requierements

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.

```bash
pip3 install virtualenv #install virtualenv
virtual env #make virtualenv
source env/bin/activate #activate virtualenv
pip3 install -r requirements.txt
```

## Usage

```bash
export FLASK_APP=app.py #adding our file
export FLASK_ENV=development #for debugging
python3 -m flask run #use --host=host or --port=port to customize
```
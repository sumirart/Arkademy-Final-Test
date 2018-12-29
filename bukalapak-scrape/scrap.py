from flask import Flask, request, Response, json
from bs4 import BeautifulSoup

import requests
page = requests.get("https://m.bukalapak.com/c/handphone?page=1")
soup = BeautifulSoup(page.content, 'html.parser')
#   print(soup.prettify())

def retrieve_all_products():
    print(soup.find_all('li', class_='product'))

if __name__ == '__main__':
    retrieve_all_products()
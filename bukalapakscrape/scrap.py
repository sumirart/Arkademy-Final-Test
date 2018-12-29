from requests import get
from bs4 import BeautifulSoup as BS
import json
import MySQLdb

# SQL DB Config
HOST = "127.0.0.1"
USERNAME = "root"
PASSWORD = ""
DATABASE = "arkademyfinaltask"

def getAll(page):
    url = "https://m.bukalapak.com/c/handphone?from=category_home&page={}&search%5Bkeywords%5D=".format(page)
    bukalapak = "https://www.bukalapak.com"
    req = get(url).content
    page = BS(req, 'html.parser')
    # for div in page.find_all('div', 'product-list'):
    data = []
    for products in page.find_all('article', 'product-display'):
        out = {}
        # title - find tag name data-name inside article with class product-display
        title = products['data-name']
        out.update({'title': title})

        # link
        link = products['data-url']
        url = bukalapak + link
        out.update({'url': url })

        # image - find img tag inside article with class product-media__img and get the value of data-src attribute
        img = products.find('img', "product-media__img")['data-src']
        out.update({'thumbnails': img})

        # price
        priceTag = products.find('div', "product-price")['data-reduced-price']
        out.update({'price': priceTag})

        data.append(out)

        # SQL Connection, for saving to DB
        db = MySQLdb.connect(HOST, USERNAME, PASSWORD, DATABASE)
        # prepare cursor object using cursor() method
        cursor = db.cursor()
        # prepare SQl query for inserting to DB
        sql = "INSERT INTO products(name, price, image_url) VALUES ('{}', '{}', '{}')".format(title, priceTag, img, 'NOW()')
        # sql = "INSERT INTO classes(name_of_class, type_of_course) VALUES ('{}', '{}')".format(name_of_class, type_of_course, 'NOW()')

        try:
            # Execute SQL command
            cursor.execute(sql)
            # commit changes in the db
            db.commit()
        except:
            # rollback if there is any error
            db.rollback()
            db.close()
            
    return(json.dumps(data))
from requests import get
from bs4 import BeautifulSoup as BS
import json

# def getListBK(category,page):
#     url = "https://bioskopkeren.fun/{}/page/{}".format(category, page)
#     req = get(url).content
#     page = BS(req, 'html.parser')
#     for movies in page.find_all('div', 'filmcontent'):
#         data = []
#         for div in movies.find_all('div', 'moviefilm'):
#             out = {}
#             a = div.find('a', href=True)
#             out.update({'url': a['href']})
#             img = div.find('img')
#             out.update({'thumbnails': img['src']})
#             data.append(out)
#     return(json.dumps(data))

def getAll(page):
    url = "https://m.bukalapak.com/c/handphone?from=category_home&page={}&search%5Bkeywords%5D=".format(page)
    bukalapak = "https://www.bukalapak.com"
    req = get(url).content
    page = BS(req, 'html.parser')
    # for div in page.find_all('div', 'product-list'):
    data = []
    for products in page.find_all('article', 'product-display'):
        out = {}
        # title
        title = products['data-name']
        out.update({'title': title})

        # link
        link = products['data-url']
        out.update({'url': bukalapak + link })

        # image
        img = products.find('img', "product-media__img")['data-src']
        out.update({'thumbnails': img})

        # price
        priceTag = products.find('div', "product-price")['data-reduced-price']
        out.update({'price': priceTag})

        data.append(out)
    return(json.dumps(data))
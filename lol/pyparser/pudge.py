import requests
import re
from bs4 import BeautifulSoup

if __name__ == '__main__':
  exit()


def hookar_risadas(target, att, heroname):
    try:
        hero = target[att][heroname]
    except KeyError:
        print(f"\tHero {heroname} not found!")
        return
    link = 'https://dota2.fandom.com' + hero['href'] + '/Responses'

    r = requests.get(link)
    soup = BeautifulSoup(r.content, 'html5lib')
    # CSS SELECTORS (selects the content based on the DOM Hierarchy)
    sel = '#mw-content-text > div > p > b'
    sel_img = '#mw-content-text > div > table.infobox > tbody > tr:nth-child(1) > th > div:nth-child(1) > a > img'
    sel_spectre = '#mw-content-text > div > p > i'

    found = False
    for item in soup.select(sel):
        if("Laughing" in item):
            lista_sons = item.findParent().find_next_sibling().select(
                "ul > li > span > audio > source")
            found = True
    if not found: ## fix pra spectre que tem a pagina diferente
        for item in soup.select(sel_spectre):
            if("Laughing" in item):
                lista_sons = item.findParent().find_next_sibling().select(
                    "ul > li > span > audio > source")
                found = True
    try:
        print(f'\tFound {lista_sons.__len__()} sounds!')
    except:
        print(f'\t(!) Failed parsing sounds')
        return

    lista = []
    for item in lista_sons:
        p = item['src']
        p = re.sub('mp3.*', 'mp3', p)
        lista.append(p)

    target[att][heroname]['vo'] = lista



def hookar_herois(target):
    URL = 'https://dota2.fandom.com/wiki/Dota_2_Wiki'
    r = requests.get(URL)

    soup = BeautifulSoup(r.content, 'html5lib')

    sel = dict()
    sel['STR'] = "#heroes > div.mp-content > table > tbody > tr:nth-child(2) > td > div > div > a"
    sel['AGI'] = "#heroes > div.mp-content > table > tbody > tr:nth-child(4) > td > div > div > a"
    sel['INT'] = "#heroes > div.mp-content > table > tbody > tr:nth-child(6) > td > div > div > a"

    for att in sel.keys():
      if att not in target.keys():
          target[att] = dict()
      for item in soup.select(sel[att]):
          nome = item.attrs['title']
          link = item.attrs['href']
          img = re.sub('png.*','png',item.find('img').attrs['data-src'])
          target[att][nome] = dict()
          target[att][nome]['href'] = link
          target[att][nome]['img'] = img
import json
import os
from json.decoder import JSONDecodeError
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from termcolor2 import c


BASE_DIR = Path(__file__).resolve().parent.parent
CURRENCIES_FILE_DIR = os.path.join(BASE_DIR, 'config', 'api', 'json', 'currencies-list.json')
CURRENCIES_PAGE_URL = 'https://www.eurochange.co.uk/travel-money/world-currency-abbreviations-symbols-and-codes-travel-money'

def parse_currencies(url: str) -> list:
  """Parse currencies"""

  print(f'[*] Read currencies from: \'{url}\'')

  page = requests.get(url)
  soup = BeautifulSoup(page.content, "html.parser")
  results = soup.findAll("table>tbody>tr", class_="table table-bordered k-table")
  tBody = soup.find("tbody", results)
  rows = soup.findAll("tr", tBody)

  # Delete first non currency row
  del rows[0]

  currencies = []

  print('[*] Parse currencies')

  # Parse currencies
  for row in rows:
    td = row.find_all('td')

    currencies.append({
      'code': td[1].get_text(),
      'character': td[2].get_text(),
    })

  return currencies

def check_currencies(currencies: list):
  """Check currencies validity"""

  print('[*] Check currencies by: code and character to be exists')

  for currency in currencies:
    if not currency['code'] or not currency['character']:

      print(c(f'[!] Incorrect currency object: {currency}\n', 'red'))

      raise Exception('Incorrect currency object')

  print('[*] Check currencies to be unique')

  uniqueCurrencyCodes = {}
  uniqueCurrency = []

  for currency in currencies:
    if not currency['code'] in uniqueCurrencyCodes:
      uniqueCurrencyCodes[currency['code']] = currency['code']
      uniqueCurrency.append(currency)
    else:
      print(currency)

  return uniqueCurrency

def write_to_file(file_path: str, currencies: list):
  """Write currencies to JSON file"""

  with open(file_path, 'w') as write_file:
    try:
      # Clear file
      write_file.write('')

      # Write JSON to file
      json.dump(currencies, write_file, indent=2)

      relative_file_path = os.path.relpath(file_path)

      print(c(f'[+] Currencies written to: \'{relative_file_path}\'', 'green'))
    except JSONDecodeError:
      print(c('[!] Something went wrong when writing JSON to file', 'red'))
      pass


if __name__ == '__main__':
  currencies = parse_currencies(CURRENCIES_PAGE_URL)

  checked_currency = check_currencies(currencies)

  write_to_file(CURRENCIES_FILE_DIR, checked_currency)

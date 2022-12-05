# lasttxparser
Parse last transaction date in blockchain and past it in google spreadsheets

Made by Crypto Chyvak: https://t.me/cryptochy

1. Insert to AppsScript in Google Spreadsheets
2. Add wallets to variable "wallets" in format ["", "", .... ""]
3. Edit sheet name in:
  const sheet = SpreadsheetApp.getActive().getSheetByName("Plan");
4. Edit blockchains API in variable "scan"
5. Edit numbers in this line: 
  var cell = sheet.getRange(14 + i, 11 + j)
  14 - Y coordinates, 11 - X coordinates of the begin of the range

const wallets = [""]

const scan = ["https://api.arbiscan.io/api?module=account&action=txlist&address=", "https://api-optimistic.etherscan.io/api?module=account&action=txlist&address=",
"https://api-nova.arbiscan.io/api?module=account&action=txlist&address="];

function CallAPI(){
  const sheet = SpreadsheetApp.getActive().getSheetByName("Plan");
  for(let i = 0; i < wallets.length; i++){
    for(let j = 0; j < scan.length; j++){
      var response = UrlFetchApp.fetch(scan[j] + wallets[i] + "&startblock=1&endblock=99999999&sort=desc&apikey=YourApiKeyToken");
      var data = JSON.parse(response.getContentText());
      var cell = sheet.getRange(14 + i, 11 + j)
      try{
        cell.setValue(new Date(parseInt(data["result"][0]["timeStamp"]*1000)));
      }catch (error){
        cell.setValue("Error");
      }
    }
    wait(1000);
  }
}

var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

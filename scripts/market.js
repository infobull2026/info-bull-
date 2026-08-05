alert("Market JS loaded");
function loadMarketData() {

  document.getElementById("nepseIndex").innerHTML =
  "Index Value: 2650.50";

  document.getElementById("nepseChange").innerHTML =
  "Change: +12.25 (+0.46%)";

  document.getElementById("turnover").innerHTML =
  "Amount: Rs. 5,000,000,000";

  document.getElementById("marketStatus").innerHTML =
  "Market Open";

}

loadMarketData();

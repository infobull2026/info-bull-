console.log("Market JS loaded");
async function loadMarketData() {

  try {

    const response = await fetch("https://info-bull.onrender.com/market");

    const data = await response.json();

    document.getElementById("nepseIndex").innerHTML =
    "Index Value: " + data.index;

    document.getElementById("nepseChange").innerHTML =
    "Change: " + data.change;

    document.getElementById("turnover").innerHTML =
    "Amount: " + data.turnover;

    document.getElementById("marketStatus").innerHTML =
    data.status;

  } catch (error) {

    document.getElementById("marketStatus").innerHTML =
    "Unable to load market data.";

    console.log(error);

  }

}

loadMarketData();

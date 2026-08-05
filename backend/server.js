const express = require("express");

const app = express();

app.get("/market", (req, res) => {

  res.json({
    index: "2650.50",
    change: "+12.25 (+0.46%)",
    turnover: "Rs. 5,000,000,000",
    status: "Market Open"
  });

});

app.listen(3000, () => {
  console.log("Backend running");
});

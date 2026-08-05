const express = require("express");

const app = express();

app.get("/market", (req, res) => {

  res.json({
    index: "Loading",
    change: "Loading",
    turnover: "Loading",
    status: "Market Open"
  });

});

app.listen(3000, () => {
  console.log("Backend running");
});

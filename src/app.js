const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
const PORT = process.env.PORT || 4000

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "No weather  was specified",
    });
  }
  res.send({
    forecast: "It is snowing",
    location: "usa",
    address: req.query.address
  });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "does not have search",
    });
  }
  console.log(req.query.rating);
  res.send({
    products: [],
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

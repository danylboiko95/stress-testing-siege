const express = require("express");

const ProductController = require("./Controllers/Product.Controller");
const Product = require("./Models/Product.model");
const port = 3000;
require("./database");
const app = express();

app.get("/", async function (req, res) {
  for (let i = 0; i < 2; i++) {
    ProductController.createNewProduct({
      body: {
        name: `Test ${i * Math.random()}`,
        price: 452 * i * Math.random(),
      },
    });
  }

  const results = await Product.find({}, { __v: 0 });
  const resultsLength = results.length;
  res.status(200).send({ length: resultsLength });
});
app.listen(port, function () {
  console.log(`Web app is listening on port ${port}`);
});

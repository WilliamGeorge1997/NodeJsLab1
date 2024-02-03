const express = require("express");
const app = express();

app.get("/index.html", function (req, res) {
  res.send("<h1>Welcome to our home page.</h1>");
});
app.listen(8080, function () {});

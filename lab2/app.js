const http = require("http");
const fs = require("fs");
const qs = require("querystring");

let handler = function (req, res) {
  fs.readFile("index.html", function (err, data) {
    res.write(data);
    res.end("");
  });

  if (req.method == "POST") {
    res.writeHead(200, { "content-type": "text/html" });
    let bodyReq = "";
    req.on("data", function (data) {
      bodyReq += data;
    });

    req.on("end", function () {
      let parsedQuery = qs.parse(bodyReq);
      if (
        parsedQuery.username.length != "" &&
        parsedQuery.password.length != "" &&
        parsedQuery.email.length != ""
      ) {
        if (parsedQuery.password.length >= 8) {
          res.write("<h2 style='color:green';>Registration sucess.</h2>");
        } else {
          res.write(
            "<h2 style='color:red';>Error password is less than 8 characters.</h2>"
          );
        }
      } else {
        res.write("<h2 style='color:red';>Please fill all inputs.</h2>");
      }
      res.end("");
    });
  }
};

const server = http.createServer(handler);
server.listen(8080);

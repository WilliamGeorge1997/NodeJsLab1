/* ---------------------------- Imported Modules ---------------------------- */
const http = require("http");
const fs = require("fs");

/* ----------------------------- Request Handler ---------------------------- */
let handler = function (req, res) {
  function requestHandler(filePath, status, { etag: hValue }) {
    fs.readFile(filePath, function (err, data) {
      res.writeHead(status, { etag: hValue });
      res.write(data);
      res.end("");
    });
  }

  /* ------------------------------- End Points ------------------------------- */

  if (req.url == "/index.html") {
    requestHandler("frontend/index.html", 200, { etag: "etag value" });
  } else if (req.url == "/about.html") {
    requestHandler("frontend/about.html", 200, { etag: "etag value" });
  } else if (req.url == "/contactus.html") {
    requestHandler("frontend/contactus.html", 200, { etag: "etag value" });
  }else {
    requestHandler("frontend/notfound.html", 404, { etag: "etag value" });
  }
};

/* ---------------------------- Establish Server ---------------------------- */
const server = http.createServer(handler);

server.listen(8080);

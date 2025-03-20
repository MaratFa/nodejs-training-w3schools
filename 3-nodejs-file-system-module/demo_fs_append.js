const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.appendFile("mynewfile1.txt", "w", function (err) {
      if (err) throw err;
      console.log("Saved!");
      res.end();
    });
  })
  .listen(8080);

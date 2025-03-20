const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.open("mynewfile2.txt", "w", function (err, file) {
      if (err) throw err;
      console.log("Saved!");
      res.end("");
    });
  })
  .listen(8080);

const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
      if (err) throw err;
      console.log("Updated!");
      res.end();
    });
  })
  .listen(8080);

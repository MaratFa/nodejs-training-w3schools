const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.writeFile("mynewfile3.txt", "Hello new content!", function (err) {
      if (err) throw err;
      console.log("Saved!");
      res.end();
    });
  })
  .listen(8080);

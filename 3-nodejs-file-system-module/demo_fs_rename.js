const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
      if (err) throw err;
      console.log("File Renamed!");
    });
  })
  .listen(8080);

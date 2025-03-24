const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const adr = "http://localhost:8080/default.htm?year=2017&month=february";
    const q = url.parse(adr, true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    const qdate = q.query;
    console.log(qdate.month);
    res.end();
  })
  .listen(8080);

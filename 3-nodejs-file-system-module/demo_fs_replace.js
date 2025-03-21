const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.writeFile('mynewfile3.txt', 'This is my text.', function(err) {
    if (err) throw err;
    console.log('Replaces!');
    res.end();
  })
}).listen(8080);
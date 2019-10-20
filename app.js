const express = require('express');
const path = require('path');
const http = require('http');

const app = express(); // function(req, res, next) {}
const staticPath=process.env.static ||'dist';
const port=process.env.port || 3000;

const options = process.env.env == 'prod' ? {maxAge: '3d'} : {maxAge: '1m'};
app.use(express.static(path.join(__dirname, staticPath), options));

app.use("/**", function (req, res) {
  res.sendfile(staticPath+"/index.html", {maxAge: 0});
});

// create static server for express 
const server = http.createServer(app);
server.listen(port);

console.log(`env:${process.env.env}`);
console.log(`path:${staticPath}`);
console.log(`port:${port}`);
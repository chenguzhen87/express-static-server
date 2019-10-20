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
server.on("error",onError)
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
      console.log('Listening on ' + bind); 
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

console.log(`env:${process.env.env}`);
console.log(`path:${staticPath}`);
console.log(`port:${port}`);
var http = require('http');

module.exports = function(serverIp, serverPort) {
  function handle_request(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    var currentDate = new Date();
    response.end('Hola beacon receiver.\nThe current date is: ' + currentDate);
    console.log('Request handled.');
  }

  http.createServer(handle_request).listen(serverPort, serverIp);
  console.log('Handling requests on ' + serverIp + ' at port ' + serverPort);
};
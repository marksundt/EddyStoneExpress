var os = require('os');

var serverIp = '127.0.0.1';

// this function came from http://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
function determineIpAddress() {
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
        serverIp = iface.address;
      }
      ++alias;
    });
  });
}

determineIpAddress();

var serverPort = 80;
var urlToBeacon = 'http://' + serverIp + ':' + serverPort;

var server = require('./server.js')(serverIp, serverPort);

var beacon = require('./beacon.js')(urlToBeacon);
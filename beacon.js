var eddystoneBeacon = require('eddystone-beacon');

module.exports = function(urlToBeacon) {
  eddystoneBeacon.advertiseUrl(urlToBeacon, { name: 'Science 101' });
  console.log('Sending beacon with URL ' + urlToBeacon);
};
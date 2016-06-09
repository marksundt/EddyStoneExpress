'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/clearenthpp.html"));
});


app.post('/charge', function(req, res) {
    console.log('Here is the response:');
    console.log(res.body);

});



app.listen(80, function () {
    console.log('Example app listening on port 80!');
});

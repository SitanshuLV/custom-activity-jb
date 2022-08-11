'use strict';

var express = require('express');
var path = require('path');
var http = require('http');
const bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 8000);

app.use(bodyParser.json());

app.post('/activity/execute', (req, res) => {
    return res.status(200).json({success: true});
});

app.post(/\/activity\/(save|publish|validate)/, (req, res) => {
		return res.status(200).json({success: true});
});

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function() {
	console.log(`Express server listening on port ${app.get('port')}`);
});
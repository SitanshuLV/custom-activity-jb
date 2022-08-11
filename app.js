var express = require('express');
var path = require('path');
var http = require('http');
const bodyParser = require('body-parser')
var save = require('./routes/save');
var validate = require('./routes/validate');
var publish = require('./routes/publish');
var stop = require('./routes/stop');
var execute = require('./routes/execute');

var app = express();

app.set('port', process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/save', save.save);
app.get('/validate', validate.validate);
app.get('/publish', publish.publish);
app.get('/stop', stop.stop);
app.get('/execute', execute.execute);

http.createServer(app).listen(app.get('port'), function() {
	console.log(`Express server listening on port ${app.get('port')}`);
});
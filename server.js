var express = require('express');
var app = express();
var port = parseInt(process.env['PORT'] || 8080);

app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.use(express.logger('dev'));
app.use(express.bodyParser());

app.listen(port);
console.log('Listening on port ' + port);

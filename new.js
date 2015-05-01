var express =  require('express');
var app = express();

app.get('/tellmeajoke', function(req, res) {
    res.end('This is a joke.');
});

app.get('/', function(req, res) {
    res.end('Hello World');
});

app.listen(3000);

var path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.resolve(__dirname,'../client/static')));

app.listen(3000);
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Manufacturer = require('../models/manufacturers.js');
const Brand = require('../models/brands.js');
const routes = require('./routes');

//connect to mongoose
mongoose.connect('mongodb://localhost/freshoj');
const db = mongoose.connection;
app.use(express.static(path.resolve(__dirname,'../client/static')));
app.use(bodyParser.json());
app.get('/', function(req, res){
    res.send('Hello World');
});

app.use('/api', routes);

app.put('/api/manufacturers/:_id', function(req, res){
    let id = req.params.id;
    let manufacturer = req.body;
    Manufacturer.updateManufacturer(id, manufacturer, {}, function(err, manufacturer){
        if(err){
            throw err;
        } 
        res.json(manufacturer);
    })
});

app.post('/api/manufacturers', function(req,res){
    let manufacturer = req.body;
    Manufacturer.addManufacturer(manufacturer, function(err, manufacturer) {
        if(err) {
            throw err;
        }
        res.json(manufacturer);
    });

});

app.get('/api/brands', function(req,res){
    Brand.getBrand(function(err, brands){
        if(err) {
            throw err;
        }
        res.json(brands);
    });
});

app.listen(3000, function () {
    console.log('running on port 3000');
});
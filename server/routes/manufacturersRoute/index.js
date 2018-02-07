const Manufacturer = require('../../../models/manufacturers.js');

module.exports.get = function (req, res) {
    Manufacturer.getManufacturer(function(err, manufacturers){
        if(err) {
            throw err;
        }
        res.json(manufacturers);
    }, 100);
};

module.exports.put = function (req, res) {
    let id = req.params.id;
    let manufacturer = req.body;
    Manufacturer.updateManufacturer(id, manufacturer, {}, function(err, manufacturer){
        if(err){
            throw err;
        } 
        res.json(manufacturer);
    });
};
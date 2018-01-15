var mongoose = require('mongoose');

var manufacturerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Manufacturer = module.exports = mongoose.model('Manufacturers', manufacturerSchema)

//Get Manufacturers

module.exports.getManufacturer = function (callback, limit){
    Manufacturer.find(callback).limit(limit);
};

module.exports.addManufacturer = function(manufacturer, callback) {
    Manufacturer.create(manufacturer, callback);
}

module.exports.updateManufacturer = function(id, manufacturer, options, callback) {
    let query = {_id: id};
    let update = {
        name: manufacturer.name
    };
    Manufacturer.findOneAndUpdate(query, update, options, callback);
}

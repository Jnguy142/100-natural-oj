const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    signatureIngredient: {
        type: String,
        required: true
    }

});

var Brand = module.exports = mongoose.model('Brands', brandSchema);

module.exports.getBrand = function(callback, limit){
    Brand.find(callback).limit;
}
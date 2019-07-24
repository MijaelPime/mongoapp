const mongoose = require('mongoose');
const placeSchema = mongoose.Schema({
    name:String,
    address:String,
    rating: Number,
    location:{
        lat:Number,
        lng: Number
    }
});

module.exports = mongoose.model('Place', placeSchema);
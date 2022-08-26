const mongoose = require('mongoose')
const validator = require('validator')

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
        
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        min: 11,
    }
    
    
})

const farmer =  new mongoose.model('farmer',farmerSchema);

module.exports = farmer;
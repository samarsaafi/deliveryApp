const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pickup = new Schema({
    fournisPhone: {
        type: Number  ,
        required : true ,
        unique: true,
    },
    fournisAddresse: {
        type: String ,
        required : true 
    },
    fournisNbrcolis: { 
        type: Number ,
        required : true 
    }
}, {
    collection: 'pickup'
})

module.exports = mongoose.model('Pickup', Pickup)
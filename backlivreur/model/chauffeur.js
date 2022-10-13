const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chauffeur = new Schema({
    
    email: {
        type: String ,
        required : true ,
        unique: true,
    },
    chauffeurname: {
        type: String ,
        required : true 
    }
}, {
    collection: 'chauffeurs'
})

module.exports = mongoose.model('Chauffeur', Chauffeur)
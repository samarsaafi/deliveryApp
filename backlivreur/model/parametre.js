const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Parametre = new Schema({
   carMatricule: {
        type: String ,
        required : true 
    },
    gazOil: {
        type:Number ,
        required : true 
    },
    kiloDepart: { 
        type: Number ,
        required : true 
    },
    kiloArrive : { 
        type: Number ,
         required : true ,
         unique : true, 
    }
}, {
    collection: 'parametre'
})

module.exports = mongoose.model('Parametre', Parametre)
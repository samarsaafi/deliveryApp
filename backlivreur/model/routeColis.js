const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RouteColis = new Schema({
    codb: {
        type:Number ,
        unique: true, 
        required: true
    },
    cod: {
        type: String ,
        unique:  true, 
        required: true
    },
    clientName: {
        type: String ,
        required: true
    }
,
    clientAdresse: {
        type: String ,
        required : true 
    }
    ,
    clientPhone: {
        type: Number ,
        required : true  
        
    } , 
    colisEtat :{
        type: String ,
        required : true 
    }
}, {
    collection: 'routeColis'
})

module.exports = mongoose.model('RouteColis', RouteColis)

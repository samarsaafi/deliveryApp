const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./db/database');

// MongoDB connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/backlivreur', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected ')
},
    error => {
        console.log('Database not connected : ' + error)
    }
)

const chauffeurRoute = require('./routes/chauffeur.route')
const ColisRoute = require('./routes/routeColis.route');
const PickupRoute = require('./routes/pickup.route');
const parametreRoute = require('./routes/parametre.route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/parm',parametreRoute)
app.use('/api', chauffeurRoute)
app.use('/api', ColisRoute)
app.use('/api', PickupRoute)
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('PORT connected: ' + port)
})

app.use(function (error, res,) {
    console.error(error.message);
    if (!error.statusCode) error.statusCode = 500;
    res.status(error.statusCode).send(error.message);
});
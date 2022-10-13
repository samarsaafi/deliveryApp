const express = require('express');
const app = express();
const parametresRoute = express.Router();
let ParametresModel = require('../model/parametre');


parametresRoute.route('/parametres').get((req, res) => {
    ParametresModel.find((error, parametres) => {
        if (error) {
            return next(error)
        } else {
            res.json(parametres)
            console.log('Parametres retrieved!')
        }
    })
})


parametresRoute.route('/create-parametres').post((req, res, next) => {
    ParametresModel.create(req.body, (err, parametres) => {
        if (err) {
            return next(err)
        } else {
            res.json(parametres)
            console.log('Parametres created!')
        }
    })
});


parametresRoute.route('/fetch-parametres/:id').get((req, res) => {
    ParametresModel.findById(req.params.id, (err, parametres) => {
        if (err) {
            return next(err)
        } else {
            res.json(parametres)
            console.log('Parametres retrieved!')
        }
    })
})


parametresRoute.route('/update-parametres/:id').put((req, res, next) => {
    ParametresModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, parametres) => {
        if (err) {
            return next(err);
        } else {
            res.json(parametres)
            console.log('Parametres updated!')
        }
    })
})

parametresRoute.route('/delete-parametres/:id').delete((req, res, next) => {
    ParametresModel.findByIdAndRemove(req.params.id, (error, parametres) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: parametres
            })
            console.log('Parametres deleted!')
        }
    })
})

module.exports = parametresRoute;
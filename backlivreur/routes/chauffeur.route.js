const express = require('express');
const app = express();
const chauffeurRoute = express.Router();
let ChauffeurModel = require('../model/Chauffeur');


chauffeurRoute.route('/').get((req, res) => {
    ChauffeurModel.find((error, chauffeur) => {
        if (error) {
            return next(error)
        } else {
            res.json(chauffeur)
            console.log('Chauffeurs retrieved!')
        }
    })
})


chauffeurRoute.route('/create-chauffeur').post((req, res, next) => {
    ChauffeurModel.create(req.body, (err, chauffeur) => {
        if (err) {
            return next(err)
        } else {
            res.json(chauffeur)
            console.log('Chauffeur created!')
        }
    })
});


chauffeurRoute.route('/fetch-chauffeur/:id').get((req, res) => {
    ChauffeurModel.findById(req.params.id, (err, chauffeur) => {
        if (err) {
            return next(err)
        } else {
            res.json(chauffeur)
            console.log('Chauffeur retrieved!')
        }
    })
})


chauffeurRoute.route('/update-chauffeur/:id').put((req, res, next) => {
    ChauffeurModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, chauffeur) => {
        if (err) {
            return next(err);
        } else {
            res.json(chauffeur)
            console.log('Chauffeur updated!')
        }
    })
})

chauffeurRoute.route('/delete-chauffeur/:id').delete((req, res, next) => {
    ChauffeurModel.findByIdAndRemove(req.params.id, (error, chauffeur) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: chauffeur
            })
            console.log('Chauffeur deleted!')
        }
    })
})

module.exports = chauffeurRoute;
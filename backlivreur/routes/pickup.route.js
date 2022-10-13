const express = require('express');
const app = express();
const pickupRoute = express.Router();
let PickupModel = require('../model/Pickup');


pickupRoute.route('/pickup').get((req, res) => {
    PickupModel.find((error, pickup) => {
        if (error) {
            return next(error)
        } else {
            res.json(pickup)
            console.log('Pickup retrieved!')
        }
    })
})


pickupRoute.route('/create-pickup').post((req, res, next) => {
    PickupModel.create(req.body, (err, pickup) => {
        if (err) {
            return next(err)
        } else {
            res.json(pickup)
            console.log('Pickup created!')
        }
    })
});


pickupRoute.route('/fetch-pickup/:id').get((req, res) => {
    PickupModel.findById(req.params.id, (err, pickup) => {
        if (err) {
            return next(err)
        } else {
            res.json(pickup)
            console.log('Pickup retrieved!')
        }
    })
})


pickupRoute.route('/update-pickup/:id').put((req, res, next) => {
    PickupModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, pickup) => {
        if (err) {
            return next(err);
        } else {
            res.json(pickup)
            console.log('Pickup updated!')
        }
    })
})

pickupRoute.route('/delete-pickup/:id').delete((req, res, next) => {
    PickupModel.findByIdAndRemove(req.params.id, (error, pickup) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: pickup
            })
            console.log('Pickup deleted!')
        }
    })
})

module.exports = pickupRoute;
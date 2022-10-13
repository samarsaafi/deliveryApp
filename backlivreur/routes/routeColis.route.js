const express = require('express');
const app = express();
const routeColisRoute = express.Router();
let RouteColisModel = require('../model/RouteColis');


routeColisRoute.route('/routeColis').get((req, res) => {
    RouteColisModel.find((error, routeColis) => {
        if (error) {
            return next(error)
        } else {
            res.json(routeColis)
            console.log('RouteColis retrieved!')
        }
    })
})


routeColisRoute.route('/create-routeColis').post((req, res, next) => {
    RouteColisModel.create(req.body, (err, routeColis) => {
        if (err) {
            return next(err)
        } else {
            res.json(routeColis)
            console.log('RouteColis created!')
        }
    })
});


routeColisRoute.route('/fetch-routeColis/:id').get((req, res) => {
    RouteColisModel.findById(req.params.id, (err, routeColis) => {
        if (err) {
            return next(err)
        } else {
            res.json(routeColis)
            console.log('RouteColis retrieved!')
        }
    })
})


routeColisRoute.route('/update-routeColis/:id').put((req, res, next) => {
    RouteColisModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, routeColis) => {
        if (err) {
            return next(err);
        } else {
            res.json(routeColis)
            console.log('RouteColis updated!')
        }
    })
})

routeColisRoute.route('/delete-routeColis/:id').delete((req, res, next) => {
    RouteColisModel.findByIdAndRemove(req.params.id, (error, routeColis) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: routeColis
            })
            console.log('RouteColis deleted!')
        }
    })
})

module.exports = routeColisRoute;
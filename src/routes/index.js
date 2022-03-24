import { Router } from 'express';
const rootRoute = Router();

rootRoute.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

export default rootRoute
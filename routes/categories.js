const Router = require('express').Router();

Router.get('/create', (req, res, next) => {
    res.render('cat-form');
});

Router.post('/create', (req, res, next) => {
    console.log(req.body);
    res.send();
});

module.exports = Router;
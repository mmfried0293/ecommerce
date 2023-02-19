const Router = require('express').Router();
const Controller = require('../controllers/categories');

Router.get('/create', (req, res, next) => {
    res.render('cat-form');
});

Router.post('/create', async (req, res, next) => {
    try{
        let res = await Controller.createCategory(req.body);
        console.log(res);
        res.send(res);
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;
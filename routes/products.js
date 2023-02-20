const Router = require('express').Router();
const Controller = require('../controllers/products');
const CategoriesController = require('../controllers/categories');

Router.get('/create', async (req, res, next) => {
    let categories = await CategoriesController.getAll();
    res.render('product-form', {categories});
});

Router.post('/create', async (req, res, next) => {
    try{
        let res = await Controller.create(req.body);
        console.log(res);
        res.send(res);
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;
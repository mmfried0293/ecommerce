const Router = require('express').Router();
const Controller = require('../controllers/products');
const CategoriesController = require('../controllers/categories');
const Path = require('path');

Router.get('/create', async (req, res, next) => {
    
    let categories = await CategoriesController.getAll();
    res.render('product-form', {categories});
});





Router.get('/view', async (req, res, next) => {
    let products = await Controller.getAll();
    //let categories = await CategoriesController.getAll();
    res.render('product-view', {products});
});

Router.post('/create', async (req, res, next) => {
    try{
        let data = await Controller.create(req.body);
        
        res.send(data);
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;
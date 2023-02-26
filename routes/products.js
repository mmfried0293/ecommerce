const multer = require('multer');
const Router = require('express').Router();
const Controller = require('../controllers/products');
const CategoriesController = require('../controllers/categories');
const Path = require('path');
const upload = multer({dest : Path.join(__dirname, '../static/assets') });

Router.get('/create', async (req, res, next) => {
    let categories = await CategoriesController.getAll();
    res.render('product-form', {categories});
});

Router.get('/view', async (req, res, next) => {
    let products = await Controller.getAll();
    res.render('products-view', {products});
});

Router.get('/json', async (req, res, next) => {
    let products = await Controller.getAll();
    res.json(products);
});

Router.post('/create', upload.single('Image'), async (req, res, next) => {
    try{
        let product = req.body;
        product.Image = req.file.filename;
        await Controller.create(product);
        res.redirect('/products/view');
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;
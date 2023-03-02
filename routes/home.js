const Router = require('express').Router();


Router.get('/', (req, res, next) => {  
    try {
    res.render('home-page');
    }
    catch(e){
    console.error(e);
        res.render('error', {error : e.toString()});
}
});


module.exports = Router;
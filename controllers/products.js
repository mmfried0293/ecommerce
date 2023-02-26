

const {knex} = require('./db');

module.exports = {
    create,
    getAll
}

async function getAll(){
    return knex.from('Products')
    .join('Categories', 'Categories.CategoryId', '=', 'Products.CategoryId')
    .select('Products.*', {CatName : 'Categories.Name'});
}

async function create(data){
    return knex('Products').insert(data); 
}

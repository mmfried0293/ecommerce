

const {knex} = require('./db');

module.exports = {
    create,
    getAll
}

// async function getAll(){
//     return knex.select(, Name).from('Products').leftjoin('Categories').ON('Products.CategoryId', '=', 'Categories.CategoryId');
// }

// async function getAll (){
//     return knex('Products').join('Categories', 'Products.CategoryId', '=', 'Categories.CategoryId')
//     .select('*', 'Categories.Name');
// }

async function getAll () {
    return knex.from('Products').
    join('Categories', 'Products.CategoryId','=' ,'Categories.CategoryId' ).
    select('Products.*', {Name : 'Categories.Name'});
};


async function create(data){
    return knex('Products').insert(data); 
}

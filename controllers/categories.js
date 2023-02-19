
const CONFIG = require('../config.json');
const knex = require('knex')({
    client: 'mssql',
    config : {
        server : CONFIG.DB_SERVER,
        database : CONFIG.DB_DATABASE
    }
});

module.exports = {
    createCategory
}

async function createCategory(category){
    return knex('Categories').insert(category); 
}

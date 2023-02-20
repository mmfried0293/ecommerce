
const CONFIG = require('../config.json');
const knex = require('knex')({
    client: 'mssql',
    config : {
        server : CONFIG.DB_SERVER,
        database : CONFIG.DB_DATABASE
    }
});

module.exports = {
    create
}

async function create(product){
    return knex('Products').insert(product); 
}

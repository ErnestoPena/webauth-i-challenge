const knex = require('knex');

const db = require('./db-config');

module.exports = {
   find,
   add,
   findEmail
}

function find() {
    return db('users');
}

function add(user) {
    console.log(user)
    return db('users').insert(user);
}

function findEmail(email) {
    return db('users').where('email' , '=' , email);
}
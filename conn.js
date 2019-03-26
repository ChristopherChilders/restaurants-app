// First require 'pg-promise'
// call it immediately, which gives us a configured database
const pgp = require('pg-promise')();
const options = {
    host: 'localhost',
    database: 'restaurants-app'
};

//make a connection to the database specified
const db = pgp(options);

db.any('SELECT * FROM users WHERE id=1')
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        // error;
    });
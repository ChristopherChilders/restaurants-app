const db = require('./conn');

function getUserById(theId){
    return db.any(`select * from users where id=${theId}`)
};

getUserById(1).then(console.log);
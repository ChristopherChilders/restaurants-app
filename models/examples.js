const db = require('./conn');

function getUserById(theId){
    return db.any(`select * from users where id=${theId}`)
};

getUserById(1).then(console.log);



// Look into async && await vs .then
// async function main(){
//     const user3 = await getUserById(3);
//     console.log(user3);
// }

// main();
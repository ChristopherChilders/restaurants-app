//Bring in the database connection
const db = require('./conn');

//Need a User Class
// classes should start w/ uppercase
class User {

    constructor(id, first_name, last_name, email, password){
        //in python, we say 'self'
        //in JavaScript, we say 'this'
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }

    //"static" means that the function is something
    //the class can do, but an instance cannot.
    static getById(id){
        // .any always returns an array
        // return db.any(`select * from users where id=${id}`)
        // Instead, we'll use .one
        return db.one(`select * from users where id=${id}`)
        .then((userData) => {
                        // you *must* use the 'new' keyword
                        // when you call a JavaScript constructor
                        const userInstance = new User(userData.id, userData.first_name, userData.last_name, 
                            userData.email, userData.password);
                            return userInstance;
                    })
                    .catch(() => {
                        return null; // signal an invalid value
                    })
    }

    //no static since this is an instance method
    //it belongs to the individual instance
    save(){
        //use .result when you might want a report about how many rows got affected
        return db.result(`
        update users set 
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            email='${this.email}',
            password='${this.password}'
        where id=${this.id}`
            )
    }
};

// User.getById(3)
//     .then((user) => {
//         console.log(user);
//     });

//Export my User model
module.exports = User;
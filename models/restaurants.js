// bring in the database connection
const db = require('./conn');

//declare the class
class Restaurant {
    //need a constuctor to id the values i'll be searching for
    constructor(id, name, address, street, state, phone, menu, picture){
        this.id = id;
        this.name = name;
        this.address = address;
        this.street = street;
        this.state = state;
        this.phone = phone;
        this.menu = menu;
        this.picture = picture;
    }
    //getAll is a static method
    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we return the call to db.any
        return db.any('select * from restaurants')
        .then((arrayOfRestaurants) => {
            return arrayOfRestaurants.map((restaurantData) => {
                const aRestaurant = new Restaurant(restaurantData.id, restaurantData.first_name, restaurantData.last_name, 
                    restaurantData.email, restaurantData.password)
                return aRestaurant
            })
        });
    }
    
}

// export the class
module.exports = Restaurant
// bring in the database connection
const db = require('./conn');

//declare the class
class Favorites {
    //need a constuctor to id the values i'll be searching for
    constructor(id, user_id, restaurant_id){
        this.id = id;
        this.userId = user_id;
        this.restaurantId = restaurant_id;
    }

    static getById(id) {
        // .any returns 0 or more results in an array
        // but that's async, so we return the call to db.any
        return db.one(`select * from favorites where id=${id}`)
                .then((favoriteData) => {
                    return new Reviews(
                        favoriteData.id,
                        favoriteData.userId,
                        favoriteData.restaurantId                      
                    )
                })
    }
    static getAll() {
        return db.any(`select * from favoites`)
                .then((arrayOfFavorites) => {
                    return arrayOfFavorites.map((favoriteData) => {
                        return new Favorites(
                            favoriteData.id,
                            favoriteData.userId,
                            favoriteData.restaurantId   
                        );
                    });
                });
    }
}

// export the class
module.exports = Favorites
// bring in the database connection
const db = require('./conn');

//declare the class
class Reviews {
    //need a constuctor to id the values i'll be searching for
    constructor(id, score, content, restaurant_id, user_id){
        this.id = id;
        this.score = score;
        this.content = content;
        this.restaurantId = restaurant_id;
        this.userId = user_id;
    }

    static getById(id) {
        // .any returns 0 or more results in an array
        // but that's async, so we return the call to db.any
        return db.one(`select * from reviews where id=${id}`)
                .then((reviewData) => {
                    return new Reviews(
                        reviewData.id,
                        reviewData.score,
                        reviewData.content,
                        reviewData.restaurantId,
                        reviewData.userId
                    )
                })
    }
    static getAll() {
        return db.any(`select * from reviews`)
                .then((arrayOfReviews) => {
                    return arrayOfReviews.map((reviewData) => {
                        return new Reviews(
                            reviewData.id,
                            reviewData.score,
                            reviewData.content,
                            reviewData.restaurantId,
                            reviewData.userId
                        );
                    });
                });
    }
}

// export the class
module.exports = Reviews

// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/user');
const Restaurant = require('../models/restaurants');
const Reviews = require('../models/reviews');

//add a describe block for restaurant tests
describe('Restaurant model', () => {
    it('should be able to grab an array of restaurants', async () => {
        //write the code you wish existed
        const arrayOfRestaurants = await Restaurant.getAll();
        expect(arrayOfRestaurants).to.be.instanceOf(Array);
    });
});

// describe('Sanity check', function(){
//     it('should be 2', function(){
//         // assert.equal(2, 1+1);
//         expect(1+1).to.equal(2);
//     });
// });

describe('Users model', () => { //arrow function!
    //happy path
    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    });
    //sad path 
    //control + command + space = emoji!
    it('should error if no user id', async () => {
        const theUser = await User.getById(12345);
        expect(theUser).to.be.null;
        // theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    });

    it('should update the user', async () => {
        // grab a user with id 2
        const theUser = await User.getById(2);
        // update the email
        theUser.email = 'new@new.com';
        // save the user
        await theUser.save();
        const alsoTheUser = await User.getById(2);
        expect(alsoTheUser.email).to.equal('new@new.com');
        // theUser.save()
        //     .then(async (report) => {
        //         // console.log(report);
        //         // re-grab the user with id 2
        //         const alsoTheUser = await User.getById(2);
        //         // expect the email to be equal to the new value
        //         expect(alsoTheUser.email).to.equal('new3asdfadf@new.com');
        //     });
    });

    it('should encrypt the password', async () => {
        //get a user with id 1
        const theUser = await User.getById(1);
        //set their password field to "bacon"
        theUser.setPassword("bacon");
        //compare their password to "bacon"
        expect(theUser.password).not.to.equal("bacon");
        //it should be false
    });

    it('should be able to check for passwords', async () => {
        //get a user with id 1
        const theUser = await User.getById(1);
        //set their password field to "bacon"
        theUser.setPassword("bacon");
        //save them to the database
        await theUser.save();
        //get them back out of the database
        const sameUser = await User.getById(1);
        //ask them if their password is "bacon"
        const isCorrectPassword = sameUser.checkPassword("bacon");
        expect(isCorrectPassword).to.be.true;

        const isNotCorrectPassword = sameUser.checkPassword("tofu");
        expect(isNotCorrectPassword).to.be.false;
    });
});

describe('Reviews', () => {
    // can i get one review?
    it('should be able to retrieve a review by id', async () => {
        // hopes and dreams phase: what code do i wish existed?
        const thatReview = await Reviews.getById(2);
        expect(thatReview).to.be.an.instanceOf(Reviews);
    });
    // can i get all reviews?
    it('should be able to retieve all reviews', async () => {
        const aBunchOfReviews = await Reviews.getAll();
        expect(aBunchOfReviews).to.be.an.instanceOf(Array);
        //and make sure each of them is an array
        //use a plain 'for' loop, do that the exception does not
        //get swallowed by a .forEach callback
        for(let i=0; i<aBunchOfReviews.length; i++){
            expect(aBunchOfReviews[i]).to.be.an.instanceOf(Reviews);
        }
    });
});

describe('Users and Reviews', () => {
    it('a user instance should be able to retieve all their reviews', async () => {
        //grab a user by id
        const theUser = await User.getById(3);
        //then get all their reviews
        // const theReviews = await theUser.getReviews();

        const theReviews = await theUser.reviews;
        
        //confirm that their reviews are in an array
        expect(theReviews).to.be.an.instanceOf(Array);
        //and that the array is the correct length
        expect(theReviews).to.have.lengthOf(1);
        //and that each one is an instance of Reviews
        for (let i=0; i<theReviews.length; i++){
            expect(theReviews[i]).to.be.an.instanceOf(Reviews)
        }
    })
});
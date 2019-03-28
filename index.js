const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

//Import my model class
const Reviews = require('./models/reviews')
const Users = require('./models/user')

const server = http.createServer(async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    //if req.url is "/users", send them all users
    //else if it doesnt match either, send a welcome message

    if (req.url === "/reviews"){
        const allReviews = await Reviews.getAll();
        const reviewJSON = JSON.stringify(allReviews);
        res.end(reviewJSON);

        
    } else if (req.url.startsWith("/users")){
        const parts = req.url.split("/")
        console.log(parts);
        
        
        //when the req.url is "/users", parts is ['', 'users']
        //when the req.url is "/users/3", parts is ['', 'users', '3']
        const method = req.method;
        if (method === "GET"){

            if(parts.length === 2){
                const allUsers = await Users.getAll();
                const userJson = JSON.stringify(allUsers);
                res.end(userJson);
            } else if (parts.length === 3){
                const userId = parts[2];
                const theUser = await Users.getById(userId);
                const userJson = JSON.stringify(theUser);
                res.end(userJson)
            } else {
                res.statusCode = 404;
                res.end('Resource not found.')
            }
        }else if (method === "POST"){
            res.end('{message: "it sounds like you would like to create"}');
        }else if (method === "PUT"){
            res.end('{message: "you wanna update, doncha?"')
        }else if (method === "DELETE"){
            res.end('{message: "remove the user?"')
        }
            
    } else {
        res.end(`{message: "thank you for your patronage. please send bitcoin."}`);
    } 
    

});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
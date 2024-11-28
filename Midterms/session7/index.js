const express = require("express");
const jordan = express();

const port = 4000;

//Middlewares
jordan.use(express.json());
jordan.use(express.urlencoded({extended:true}));

//Request
//Get Method
jordan.get("/",(req, res) => {
    res.send("Hello World!");
})

let users = [];

jordan.get("/hello", (req, res) => {
    res.send("Hello from /hello endpoint.");

})

jordan.post("/hello", (req, res) => {
    res.send(`Hello ${req.body.firstName} ${req.body.lastName}!`);
})

jordan.post("/register", (req, res) => {
    if(req.body.username !== "" && req.body.password !== ""){
        users.push(req.body);
        res.send(`User ${req.body.username} is now registered!`);
    }else{
        res.send("Please enter correct username or password!");
    }
})

jordan.delete("/delete-user", (req, res) => {
    if(users.length > 0){
        users.pop();
        res.send("A user was deleted");
    }else{
        res.send("There is no registered user.");
    }
})

jordan.get("/get-users", (req, res) => {
    if(users.length > 0){
        res.json(users);
    }else{
        res.send("There is no registered user.");
    }
})


jordan.listen(port, () => console.log("Server is running at port number " + port));
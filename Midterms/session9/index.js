const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 4000;


//Mongoose setup and connection
mongoose.connect("mongodb+srv://admin:admin123@ua-database.cuuzs.mongodb.net/practice?retryWrites=true&w=majority&appName=UA-DATABASE");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to mongoDB"));

//SCHEMA
const bookSchema = new mongoose.Schema({
	
    title: String,
  	author: String,
  	publishedDate: String,
  	genre: [String],
	Price: Number
})

//MODEL
const Book = mongoose.model("Book", bookSchema);

//middlewar
server.use(express.json());
server.use(express.urlencoded({extended:true}));

//Operations
//Add a book
server.post("/books", (req, res) => {
    Book.findOne({title: req.body.title}).then((result, err)=>{
        if(result !== null && result.title == req.body.title){
            return res.send({
                code: "ERROR",
                message: "Duplicate Found!",
                data: result
            });
        }else{
            let newBook = new Book({
                title: req.body.title,
                author: req.body.author,
                publishedDate: req.body.publishedDate,
                genre: req.body.genre,
                Price: req.body.Price
            });

            newBook.save().then((savedBook, saveErr) => {
                if(saveErr){
                    return console.error(saveErr);
                }else{
                    return res.send({
                    code: 200,
                    message: "Book Added",
                    data: savedBook
                })}
            })
        }
    })
});

//Get all books in the db
server.get("/books", (req, res) => {
    Book.find({}).then((result, err) =>{
        if(err){
            return res.send("ERROR!");
        }else{
            return res.send({
                code:200,
                message: "LIST OF ALL BOOKS",
                result: result
            });
        }
    } ) 
})

// Get specific book using its Title
server.get("/books/search-title/:title", (req, res) => {
    const title = req.params.title; // Get title from URL params

    Book.findOne({ title: new RegExp(title, 'i') }) // Use a case-insensitive search
        .then(result => {
            if (result == null) {
                return res.send({
                    message: "Cannot find book with the given title."
                });
            } else {
                return res.send({
                    message: "ONE BOOK RETRIEVED!",
                    result: result
                });
            }
        })
        .catch(err => {
            return res.send({
                message: "There is a server error."
            });
        });
});




//Get specific book using its ID
//:bookId
server.get("/books/search-id/:bookId", (req, res) => {
    Book.findById(req.params.bookId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            })
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find book with the given ID"
                })
            }else{
                res.send({
                    message: "ONE BOOK RETRIEVED!",
                    result: result
                })
            }
        }
    })
})

//Delete a book
server.get("/books/search-delete/:bookId", (req, res) => {
    Book.findByIdAndDelete(req.params.bookId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            })
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find book with the given ID"
                })
            }else{
                res.send({
                    message: "ONE BOOK DELETED!",
                    result: result
                })
            }
        }
    })
})


//Update A BOOK
server.put("/books/search-update/:bookId", (req, res) => {
    Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true })
        .then((result) => {
            if (result == null) {
                return res.send({
                    message: "Cannot find book with the given ID"
                });
            } else {
                return res.send({
                    message: "ONE BOOK UPDATED!",
                    result: result
                });
            }
        })
        .catch(err => {
            return res.send({
                message: "There is a server error."
            });
        });
});

// Get all books with price higher than 1000
server.get("/books/expensive", (req, res) => {
    Book.find({ Price: { $gt: 1000 } }).then((result, err) => {
        if (err) {
            return res.send({
                message: "There is a server error."
            });
        } else {
            return res.send({
                code: 200,
                message: "LIST OF EXPENSIVE BOOKS",
                result: result
            });
        }
    });
});

// Get all books with price lower than 1000
server.get("/books/cheap", (req, res) => {
    Book.find({ Price: { $lt: 1000 } }).then((result, err) => {
        if (err) {
            return res.send({
                message: "There is a server error."
            });
        } else {
            return res.send({
                code: 200,
                message: "LIST OF CHEAP BOOKS",
                result: result
            });
        }
    });
});

// Get all books by a specific genre
server.get("/books/search/genre/:genre", (req, res) => {
    const genre = req.params.genre;

    Book.find({ genre: { $in: [genre] } }).then(result => {
        if (result.length === 0) {
            return res.send({
                message: `No books found for the genre: ${genre}.`
            });
        } else {
            return res.send({
                code: 200,
                message: `LIST OF BOOKS FOR THE GENRE: ${genre}`,
                result: result
            });
        }
    }).catch(err => {
        return res.send({
            message: "There is a server error."
        });
    });
});


server.listen(port, () => console.log(`Server is now running at port ${port}.` ))
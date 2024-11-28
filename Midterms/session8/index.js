const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 4000;


//Mongoose setup and connection
mongoose.connect("mongodb+srv://admin:admin123@ua-database.cuuzs.mongodb.net/BOOK_API?retryWrites=true&w=majority&appName=UA-DATABASE");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to mongoDB"));

//SCHEMA
const taskSchema = new mongoose.Schema({
    name: String, 
    status:  {
        type: String, 
        default: "pending"
    }
})

//MODEL
const Task = mongoose.model("Task", taskSchema);

//middlewar
server.use(express.json());
server.use(express.urlencoded({extended:true}));

//Operations
//Create a task
server.post("/tasks", (req, res) => {
    Task.findOne({name: req.body.name}).then((result, err)=>{
        if(result !== null && result.name == req.body.name){
            return res.send({
                code: "ERROR",
                message: "Duplicate Found!",
                data: result
            });
        }else{
            let newTask = new Task({
                name: req.body.name
            })

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    return console.error(saveErr);
                }else{
                    return res.send({
                    code: 200,
                    message: "Task Created",
                    data: savedTask
                })}
            })
        }
    })
});


//Get all task in the db
server.get("/tasks", (req, res) => {
    Task.find({}).then((result, err) =>{
        if(err){
            return res.send("ERROR!");
        }else{
            return res.send({
                code:200,
                message: "LIST OF ALL TASKS",
                result: result
            });
        }
    } ) 
})


server.listen(port, () => console.log(`Server is now running at port ${port}.` ))


//Get specific task using its ID
//:taskId
server.get("/tasks/search/:taskId", (req, res) => {
    Task.findById(req.params.taskId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            })
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find task with the given ID"
                })
            }else{
                res.send({
                    message: "ONE TASK RETRIEVED!",
                    result: result
                })
            }
        }
    })
})

//Get specific user by status
server.get("/tasks/pending", (req, res) => {
    Task.find({status: "pending"}).then((result, err) =>{
        if(err){
            return res.send("ERROR!");
        }else{
            return res.send({
                code:200,
                message: "LIST OF ALL TASKS",
                result: result
            });
        }
    } ) 
})

server.get("/tasks/complete", (req, res) => {
    Task.find({status: "completed"}).then((result, err) =>{
        if(err){
            return res.send("ERROR!");
        }else{
            return res.send({
                code:200,
                message: "LIST OF ALL TASKS",
                result: result
            });
        }
    } ) 
})



server.get("/tasks/search-status", (req, res) => {
    const status = req.query.status; 
    if (!status) {
        return res.status(400).send({
            message: "Status must be provided."
        });
    }

    Task.find({ status: status })
        .then((result) => {
            if (!result || result.length === 0) {
                return res.status(404).send({
                    message: "Cannot find task with the given STATUS"
                });
            }
            res.send({
                message: "TASKS RETRIEVED!",
                result: result
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({
                message: "There is a server error."
            });
        });
});



//Delete a task
server.get("/tasks/search-delete/:taskId", (req, res) => {
    Task.findByIdAndDelete(req.params.taskId).then((result, err) => {
        if(err){
            return res.send({
                message: "There is a server error."
            })
        }else{
            if(result == null){
                res.send({
                    message: "Cannot find task with the given ID"
                })
            }else{
                res.send({
                    message: "ONE TASK DELETED!",
                    result: result
                })
            }
        }
    })
})
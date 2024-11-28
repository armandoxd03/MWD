//Insert one data to MongoDB
db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "09123456789",
        email: "janedoe@ua.edu.ph"
    },
    courses: ["CSS", "JS", "PYTHON"],
    department: "none"
});

// Insert multiple records in mondgoDB

db.users.insertMany([{
    firstName: "Stephen",
    lastName: "Hawking",
    age: 76,
    contact: {
        phone: "09123456789",
        email: "stephenhawking@ua.edu.ph"
    },
    courses: ["PYTHON", "REACT", "PHP"],
    department: "none"
},
{
    firstName: "Neil",
    lastName: "Armstrong",
    age: 82,
    contact: {
        phone: "09123456789",
        email: "neilarmstrong@ua.edu.ph"
    },
    courses: ["REACT", "LAVAREL", "SASS"],
    department: "none"
}]);


//Selecting records in mongoDB
db.users.find();

//Selecting records in mongoDB with criteria
db.users.find({firstName: "Stephen"});

db.users.find({department: "none", age: 82});

//Upadte a record in mongoDB

db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "09123456789",
        email: "tes.edu.ph"
    },
    courses: [],
    department: "none"
});

db.user.updateOne({firstName: "Test"},
    {
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "09123456789",
                email: "billgates.edu.ph"
            },
            courses: ["PHP", "LAVAREL", "HTML"],
            department: "Operations",
            status: "Active"
        }     
});

//Update multiple records
db.user.updateMany({department: "none"},
    {
        $set:{
            department: "HR"
        }
    }
)

//find records with comparison operators
db.users.find({age:{$gt : 50}});
db.users.find({age:{$lt : 50}});
//gt, lt, gte, lte
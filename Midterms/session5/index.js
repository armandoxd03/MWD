// JS Objects, JSON, and ES6 Updates

let personArray = ["John", 16, true];
console.log(personArray);

let personObject = {
    name: "John",
    age:16,
    isRegistered: true
}

console.log(personObject);

let student = {
    firstName: "John",
    middleName: "Smith",
    lastName: "Doe",
    year: 3,
    section: "A",
    address: {
        street: "Magellan St.",
        houseNo: "750",
        brgy: "Sacred Heart",
        city: "Quezon City",
        country: "Philippines"
    },
    contact: [{phone: "09123456789" , email: "js@ua.edu.ph"}]
}

console.log(student);

// Accessing object property value using dot notation
console.log(student.firstName); //Output: John
console.log(student.address.city); //Output: Quezon City
console.log(student.contact[0].email); //Output js@ua.edu.ph    

//Object Constructor
// "this" and "new" keyword
// this keyword embraces the object propeorty
// new keyword pertains to the duplication of the constuctor


function Pet(name, breed, age, color, type){
this.name = name,
this.breed = breed,
this.age = age,
this.color = color,
this.animalType = type,
this.talk = function(){
    if(this.animalType == "dog"){
    console.log("Woof woof woof!");
    }else if(this.animalType == "bird"){
        console.log("Tweet tweet!");
        }
    }
}
let bruno = new Pet("Bruno", "Labrador", 4, "Brown", "dog");
console.log(bruno);

let Lala = new Pet("Lala", "Golder Retriever", 2, "Golden Brown", "dog");
console.log(Lala);

let Micko = new Pet("Micko", "Dalmatian", 20, "Black and White", "dog");
console.log(Micko);

let rio = new Pet("Rio", "Parrot", 1, "Red");
console.log(rio);
console.log(rio.color);

rio.animalType = "bird"
console.log(rio);
console.log(bruno.talk());
console.log(rio.talk());

// ES6 Updates
//Template Literal vs Cocatenation

let name = "Jane";
console.log("My name is " + name);
console.log(`My name is ${name}!`);
console.log(`I have a pet named ${bruno.name} and he is ${bruno.age}.`);
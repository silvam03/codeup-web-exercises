"use strict";

// var car = new Object();
// console.log(typeof car);
// "object"

let cup = new Object();
console.log(typeof cup);
// "object"

//Object literal notation
let cars = {};
console.log(typeof cars);
// "object"

//Dot notation
// let book = new Object();
// book.title = "Berserk";
// book.author = "Kentaro Miura";
// //reassign
// book.title = "Berserk Deluxe vol. 4";
// book["volume"] = 4;
// console.log(book);

let book = {
    title: "Berserk",
    author: "Kentaro Miura",
    volume: 4
};
console.log(book.title);
console.log(book);

let bookTitle = prompt("Enter a book title")
let userBook = {
    title: bookTitle,
    author: "Kentaro Miura",
    volume: 4
};
console.log(userBook);

// let car = {};
// car.make = "Toyota";
// car.model = "Camry";
// // use array notation to access "make" property
// console.log("The car make is: " + car["make"]);
// // use dot notation to access "model" property
// console.log("The car model is: " + car.model);


var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();

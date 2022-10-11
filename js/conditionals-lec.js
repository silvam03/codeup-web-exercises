"use strict";

(function() {
  //IF STATEMENT - allows you to execute code based on certain conditions

    //if(condition) {
        //if the condition is met, the code in the curly braces will be executed
    // }

    if (typeof "icon" === "boolean") {
        console.log("Run this code!")
    }
    if("hello") {
        console.log("Run this code!");
    }

    //IF ELSE STATEMENT - in addition to the IF statement, the ELSE will block will run if the condition is NOT met

    if(true) {
        // condition evaluates to true, run this code
        console.log("The condition evaluates to true");
    } else {
        // condition evaluates to false, run this code
        console.log("The condition evaluates to false!");
    }

    let currentShow = prompt("What show are you currently watching?");

    if(currentShow === "House of Dragons") {

        //to make case sensitive i would do:
        // if(currentShow.toLowerCase() or if(currentShow.toUpperCase() === "HOUSE OF DRAGONS) {

        console.log("I am watching that also!");
    } else {
        console.log("I haven't started that one yet!")
    }

    //1. Create two variables, one for password and one for username
    let username = "msilva03";
    let password = "password"
    //2. Create two more variable named userUsername and userPassword that prompt the user to enter in their credentials
    let userUsername = prompt("Please enter your username: ");
    let userPassword = prompt("Please enter your password: ");
    //3. Create an IF statement and log to the console if the user enters in the correct information
    if(username === userUsername && password === userPassword) {
        console.log("You have successfully logged in!")
    } else {
        console.log("The credentials you've entered are incorrect, please try again.")
    }
    //4. If the username matches the user, AND the password matches the user password, log to the console that they have successfully logged. Otherwise, log to the console that the credentials are incorrect

    //Example:
    //username = "msilva03"
    //password = "mypassword"

    //IF/ELSE IF/ELSE
    // if(condition) {
    //     //If condition evaluates to true, run this code
    // }else if(condition2){
    //     //If the second condition is met, run this code
    // }else {
    //     //If no condition is met, run this code
    // }

    //Teacher is dismissing students by clothes they are wearing

    let shoes = "red";
    let shirt = "hawaiian";
    let pants = "denim";
    let jacket = true;

    if(shoes === "yellow") {
        console.log("If your'e wearing red shoes you are dismised");
    } else if( shirt === "hawaiian") {
        console.log("If your'e wearing a Hawaiian shirt you are dismissed");
    } else if(pants === "plaid") {
        console.log("If your'e wearing plaid pants you are dismissed");
    } else if(jacket) {
        console.log("If your'e wearing a jacket you are dismissed");
    } else {
        console.log("Everyone else is dismissed!");
    }


    //TURNARY OPERATOR / STATEMENT

    let myName = "Codeup";

    myName === "Codeup" ? console.log("Hello, " + myName) :console.log("Hello, stranger");
    //this on top is equivalent to whats below
    if(myName === "Codeup") {
        console.log("Hello, " + myName);
    } else {
        console.log("Hello, stranger");
    }

    //If myName is equal to "Codeup", assign the greeting variable "Hello, " + myName, if myName is not equal, assign the greeting variable "Hello, stranger"
    let greeting = (myName === "Codeup") ? "Hello, " + myName : "Hello stranger!";
        console.log(greeting);

        // let compsFavShow = currentShow.tolowerCase() === "house of dragons" ? "Cool!" : "I haven't heard of that show";
        // console.log(compsFavShow);

//SWITCH STATEMENTS

    let menu = prompt("Please choose an item: \n 1. cheeseburger \n 2. chicken sandiwich \n 3. chili cheese fries \n 4. philly cheesesteak")
    switch(menu) {
        case "1":
            alert("The cheeseburger costs $5.99");
            break;
        case "2":
            alert("The chicken sandwich comes with pickles and costs $4.99");
            break;
        case "3":
            alert("The chili cheese fries cost $2.99");
            break;
        case "4":
            alert("The philly cheesesteak has mushrooms and costs $7.99");
            break;
        default:
            alert("Sorry that item is not on the menu");
    }

})();
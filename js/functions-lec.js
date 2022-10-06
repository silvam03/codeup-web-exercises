"use strict";
(function() {

//Function - a reusable block of code that performs a specified task, usually taking an input and producing an output.

//functions we've been exposed to:
//console.log()
//prompt()
//alert()
//confirm()
//.startsWith()
//.endsWith()
//Number() - constructor

//can accept a number of arguments
//someFunction(argument)

//arguments are OPTIONAL

// prompt("What did you have for breakfast?")

//Storing the return value of PROMPT to our variable named littleMermaid
    //let littleMermaid = prompt("How many days did you rent little Mermaid for?");

//Storing the return value of PARSEINT to our variable named littleMermaid
    //let littleMermaid = parseInt(littleMermaid);

//EXECUTING FUNCTIONS - DEFINITION VS EXECUTION

//Definition is calling the name of the function without '()'
    //console.log(parseInt)
//Performing the function when used with '()'
    //console.log(parseInt("11"));


//defining functions
//arguments are values we pass to a function when executing
//parameters are placeholders for our function definition
    //function add(num, num2){
//return the output of num + num2
    //return num + num2;
//}
//         console.log(add(5, 6))
//         let ten = add(20, 36);
//         console.log(ten);

//Arrow function expression
//         const addition = (num, num2) => {
//             return num + num2;
//         }
//this top one would be
//         const addition = (num, num2) => num + num2;
//         console.log(addition(4, 6));

//executing a function with function arguments
    //console.log(add(add(3,7) add(6, 8)))

//anonymous functions
//         let increment = function(x) {
//             return x + 1;
//         };
//         let two = increment(1);
//         console.log(two);
//
//         function shout(message) {
//             alert(message.toUpperCase() + " !!");
//         }
//         shout("codeup");
//         console.log(shout('codeup'));


//mini exercises
    function returnFive() {
        return 5;
    }

    console.log(returnFive(5));


    function isFive(number) {
        return number === 5 || number === "5";
    }

    // console.log(isFive(5) == (5));
    // console.log(isFive(5) == ("5"));

    // console.log((isFive(5) == (5)) || (isFive(5) == "5"));

    console.log(isFive(5));



    function isShortWord(string) {
        return string.length < 5
    }

    console.log(isShortWord("one"))
// const isShortWord = (string) => string.length < 5;
//console.log(isShortWord("twenty"))


    function isSameLength(string1, string2) {
        return string1.length === string2.length
    }

    console.log(isSameLength("hello", "hello"));


    let globalVar = "Hello, I'm Global";

    function test() {
        // local variable only accessible within the function or child code blocks
        let localVar = "Hello I'm Local"
        console.log(globalVar);
        console.log(localVar);
    }

    console.log(test());
    console.log(localVar);


}());



"use strict";
(function(){

    // Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

function justNumbers(number) {
    if(typeof number === "string") {
        console.log("This is not a number");
        return 0;
    } else {
        return number * 5;
    }
}
console.log(justNumbers(5));
console.log(justNumbers("5"));
console.log(justNumbers(12));
console.log(justNumbers("twenty"));
console.log(justNumbers(20));

//OR

    const multFive = (x) => {
        if (parseFloat(x) !== x) {
            return 0
        }
        return x * 5
    }
    console.log(justNumbers(5));
    console.log(justNumbers("5"));
    console.log(justNumbers(12));
    console.log(justNumbers("twenty"));
    console.log(justNumbers(20));




})();
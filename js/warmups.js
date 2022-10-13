"use strict";
(function(){
                            //WARMUP 10/11
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


                            //WARMUP 10/13
    // Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
function inBetween(min, max, num) {
    if (min < num && max > num) {
        return true;
    } else {
        return false;
    }
}
console.log(inBetween(1, 10, 5));
console.log(inBetween(25, 26, 25));
console.log(inBetween(0, 1, 0.5));

})();
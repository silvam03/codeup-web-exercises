//---------------------------WHILE LOOP------------------------------------------
// let i = 0;
//
// while(i < 10) {
//     console.log(i);
//     i++;
// }
// console.log("broken out of the while loop");

//---------------------------DO WHILE LOOP---------------------------------------
// do {
//     console.log(i);
//     i++;
// } while(i < 10)
// console.log("broken out of the do-while loop");
//---------------------------STUCK IN
// LOOP---------------------------------------
// let i = 10;
// do {
//     console.log(i);
//     i++;
//     console.log(i);
// } while(i > -1)

//----------------------------FOR LOOP-------------------------------------------
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("broken out of for loop");

//----------------------------BREAKS AND CONTINUES-------------------------------
// for(let i = 0; i < 100; i+=5) {
//     console.log(i);
//     break;
// }

// for(let i = 0; i < 100; i+=5) {
//     console.log(i);
//     if(i === 50) {
//         break;
//     }
// }

// for(let i = 0; i < 50; i++) {
//     if(i % 2 === 0) {
//         console.log(i + " is an even number")
//         continue;
//     }
//     console.log(i);
// }
//----------------------------MINI EXERCISE--------------------------------------
//create a variable called num that is equal to 0. Write a while loop that increments "num" by 5 so long a num is less than 100. Do the same thing with a do-while.
//---------------------------WHILE LOOP
// let num = 0
// while(num < 100) {
//     console.log(num);
//     num += 5;
// }
// console.log("broken out of while loop");
//---------------------------DO-WHILE LOOP
// do {
//     console.log(num);
//     num += 5;
// } while(num < 100)
// console.log("broken out of do-while loop");
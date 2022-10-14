

// console.log([1, 2, 3, 4, 5, 6]);
let names = ["john", "jim", "will"];
console.log(names);
let arr = [true, 1, "hello"];


let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArr[9]);

// let forLoopEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < forLoopEx.length; i++) {
//     console.log("The number at the index " + i + " is " + forLoopEx[i]);
// }

let forLoopEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let lastIndex = forLoopEx.length -1;
for(let i = lastIndex; i >= 0; i--) {
    console.log(forLoopEx[i]);
}

names.forEach(function(name) {
    console.log(name);
})

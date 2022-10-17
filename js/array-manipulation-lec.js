

//Adding element --- .push() & .unshift()
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// .push() adds to the end of the array
nums.push(11, 12, 13);
// .unshift() adds to the beginning of the array
nums.unshift(-2, -1, 0);


//Removing  elements --- .pop() & .shift()
// .pop() removes the last item of the array
nums.pop();
// .shift() removes the beginning of the array
nums.shift();

console.log(nums);
// console.log(nums.push(13)) returns newly added input but returns the new number of items in the array


//Locating array elements --- .indexOf() & .lastIndexOf()
let nameArr = ["Jim", "Joe", "Jim", "John", "Bob",];
// .indexOf() returns first instance of what you want
console.log(nameArr.indexOf("John"));
console.log(nameArr.indexOf("Jim"));
// .lastIndexOf() return last instance of what you want
console.log(nameArr.lastIndexOf("Jim"));


//Deleting before and after an element --- .slice()
//DOES NOT REASSIGN ARRAY!!!
//First argument will dictate that you remove everything before that index
//2nd argument dictates that you remove everything past the index and that index itself
//Use negative numbers to go backwards
let sliceArr = [true, false, 23, "John", "Jim", "23"]
console.log(sliceArr.slice(2, 4));
console.log(sliceArr.slice(1, 5));


//Reversing an array --- .reverse()
let reverseArr = ["Mats", "Jim", "Billy", "Chris", "John"]
// reverseArr.reverse();
console.log(reverseArr.reverse());


//Sorting an array --- .sort()
let sortArr = ["Mats", "John", "Bob", "Billy", "Jim"]
// nameArr.sort()
console.log(sortArr.sort());


//Splitting an array --- .split()
//Takes string and turns it into an array
let splitArr = "Chris, Mats, John, Jim, Billy"
// splitArr.split();
console.log(splitArr.split(","));


//Joining an array --- .join()
//Takes array and turns it into a string
let joinArr = ["John", "Jim", "Bob", "Billy", "Chris"];
// joinArr.join(" ");
console.log(joinArr.join(", "));
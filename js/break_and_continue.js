
// for(let userOddNum = prompt("Please type in an odd number between 1 and 50"); userOddNum % 2 === 0; prompt("Invalid input, try again")) {
//     if( userOddNum % 2 === 1) {
//         break;
//     }
//     console.log("The number to skip is: " + userOddNum)
// }
function oddNumberDisplay() {
    let userInput = parseFloat(prompt("Please enter an odd number between 1 and 50"))
    if(userInput % 2 !== 0 && userInput < 50 && userInput > 1){
        console.log("Number to skip is: " + userInput);
    }
    for (let i = 1; i <= 50; i++) {
        if (userInput % 2 === 0 || userInput > 50 || userInput < 1) {
            oddNumberDisplay();
            break;
        }
        if (userInput === i) {
            console.log("Yikes! Skipping number: " + userInput);
            continue;
        }
        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
        }
    }
}
oddNumberDisplay();
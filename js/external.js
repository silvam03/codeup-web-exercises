greeting = "Hello from external JavaScript";
console.log(greeting);

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?");
console.log(color);
//log result of the prompt
alert("Cool! " + color + " is my favorite color too!");

//Movie rental
let littleMermaid = prompt("How many days did you rent 'The Little Mermaid?'");
//rented for 3 days
console.log(littleMermaid);

let brotherBear = prompt("How many days did you rent 'Brother Bear'");
//rented for 5 days
console.log(brotherBear);

let hercules = prompt("How many days did you rent 'Hercules'");
//rented for 1 day
console.log(hercules);

let pricePerDay = prompt("How much did it cost per day?");
//movies cost 3 dollars per day
console.log(pricePerDay);

let finalPrice = (pricePerDay * littleMermaid) + (pricePerDay * brotherBear) + (pricePerDay * hercules);
console.log(finalPrice);

alert("Your total price is $" + finalPrice + " ,thanks!");
//9 + 15 + 3= 27

//Contractor payment
let googlePay = prompt("How much does Google pay per hour?")
//Google pays 400 an hour
console.log(googlePay);

 let amazonPay = prompt("How much does Amazon pay per hour?");
 //Amazon pays 380 am hour
console.log(amazonPay);

let facebookPay = prompt("How much does Facebook pay per hour?");
//Facebook pays 350 an hour
console.log(facebookPay);

let googleHours = prompt("How many hours did you work at Google this week?");
//worked 6 hours for google
console.log(googleHours);

let amazonHours = prompt("How many hours did you work at Amazon this week?");
//worked 4 hours for amazon
console.log(amazonHours);

let facebookHours = prompt("How many hours did you work at Facebook this week?");
//worked 10 hours at facebook
console.log(facebookHours);

let finalPayment = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
console.log(finalPayment);

alert("Your total payment for this week is $" + finalPayment);
//2400 + 1520 + 3500 = 7420

//Class Schedule
let isFull = confirm("Is the class full?");
let hasConflict = confirm("Does it conflict with your schedule?");
alert(!isFull && !hasConflict);

//Discount offer
let itemsBought = prompt("How many items did you buy?");
let offer = confirm("Has the offer expired?");
let isPremium = confirm("Are you a premium member?");

alert((parseFloat(itemsBought) > 2 || isPremium) && !offer);

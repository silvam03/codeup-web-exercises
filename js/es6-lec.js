console.log(Math.pow(2, 4));
console.log(2 ** 4);

var global = "This is global variable"

//Template strings
const name = "bob";
console.log("Hello, " + name + "!");
console.log(`Hello, ${name}!`);


//for/ of... same as for each loop
let games = ["DMC", "GOW", "Minecraft"];
for(let game of games) {
    console.log(game)
};

//arrow function
const sayHelloArrowFunction = () => "Hello there!";
// or
const sayHelloArrowFunction2 = () => {
    "Hello there!";
}

const newArrowFunction = (name = "bill") => {
    return `Hello, ${name}`;
}
console.log(newArrowFunction("john"));

const person = {
    name,
    global,
    height: 6
}
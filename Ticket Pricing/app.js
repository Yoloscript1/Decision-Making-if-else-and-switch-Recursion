const age = parseInt(prompt("Enter your age:"));

let price;
if (age <= 12) {
  price = 10;
} else if (age >= 13 && age <= 17) {
  price = 15;
} else if (age >= 18) {
  price = 20;
} else {
  console.log("Invalid age!");
}

console.log(`Your ticket price is: $${price}`);
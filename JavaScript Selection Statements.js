// Initialize a favorite number
let favoriteNumber = 7; // You can choose your own favorite number

// Ask the user to input a number using window.prompt()
let guessedNumber = parseInt(window.prompt("Guess the number:"));

// Create if-else statements to check if the guessed number is too low, too high, or correct
if (guessedNumber < favoriteNumber) {
    console.log("Too low");
} else if (guessedNumber > favoriteNumber) {
    console.log("Too high");
} else {
    console.log("Congratulations!!!");
}

// Declare a variable named birthMonth and prompt the user for input
let birthMonth = window.prompt("What is your birth month?");

// Convert the input to lowercase for case-insensitivity
birthMonth = birthMonth.toLowerCase();

// Create a switch-case statement to determine the season
switch (birthMonth) {
    case "december":
    case "january":
    case "february":
        console.log("You were born in winter.");
        break;
    case "march":
    case "april":
    case "may":
        console.log("You were born in spring.");
        break;
    case "june":
    case "july":
    case "august":
        console.log("You were born in summer.");
        break;
    case "september":
    case "october":
    case "november":
        console.log("You were born in autumn.");
        break;
    default:
        console.log("Invalid input or unknown birth month.");

        let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
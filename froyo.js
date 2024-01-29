// Overview
// As you pick out your froyo flavor at your favorite local frozen yogurt shop, you overhear the management team discussing how they would like a way for customers to order online. You make small talk and offer your services to help them build a web app.

// Requirements
// Build your website according to this user story:
// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

// Getting Started
// There is no starter code for this workshop; the solutions to previous workshops will be great to review!

// Create a new repository named Unit2.Froyo on GitHub and clone it down.
// Add your cohort team to the repository you just made.
// Open the project with VS Code and create an HTML file and a JavaScript file.
// Figure out a plan for what code you'll need to write based on the user story. Use the rubric to guide you.
// Hints
// If you are feeling stuck, try answering the following questions:

// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?
// Can you prompt the user for froyo flavors and store their result?
// Can you parse the user input into an array of froyo flavors?
// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?
// Submission
// Please submit a link to your GitHub repository. Make sure your latest changes have been pushed!

//Create prompt
let userInputString = prompt(
  "Please enter a list of froyo flavors separated by commas.",
  "Vanilla, chocolate, strawberry, etc"
);

// const userInputString = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

//Translate input values into an array
const flavorArray = userInputString.split(",");
console.log(flavorArray);

//Create an empty container to hold the count
const flavorCount = {};

//Loop over flavor array and ask 'is there a count for this flavor'? If yes, update the count (+1); if no, start counting that flavor

for (i = 0; i < flavorArray.length; i++) {
  const flavorsObject = Object.keys(flavorCount);
  if (flavorsObject.includes(flavorArray[i])) {
    flavorCount[flavorArray[i]] += 1;
  } else {
    flavorCount[flavorArray[i]] = 1;
  }
}
console.table(flavorCount);

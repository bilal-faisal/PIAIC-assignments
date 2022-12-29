// Task 12
// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.

let names = ["Junaid", "Fatima", "Ali", "Azeem"];

// individually
console.log("Hello! " + names[0]);
console.log("Hello! " + names[1]);
console.log("Hello! " + names[2]);
console.log("Hello! " + names[3]);

// using loop
names.forEach((element) => {
  console.log(`Hello! ${element}`);
});


// display
let result = '';
names.forEach((element) => {
    result += `<li>Hello! ${element}</li>`
});
  
document.getElementById("result").innerHTML = `<ul>${result}</ul>`;

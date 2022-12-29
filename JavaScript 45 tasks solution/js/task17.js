// Task 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive
// in time for the dinner, and you have space for only two guests.

let names = ["Haleema", "Junaid", "Azeem", "Fatima", "Ahmed", "Sohaib"];

console.log("You can invite only two people for dinner");

const run_loop_x_times = names.length - 2;
for (let i = 0; i < run_loop_x_times; i++) {
  let nm = names.shift();
  console.log("Sorry " + nm + "! Can't invite you to dinner");
}

names.forEach((element) => {
  console.log(`Dear ${element}! You're still invited to dinner.`);
});


const run_loop_y_times = names.length;
for (let i = 0; i <  run_loop_y_times; i++) {
    names.shift();
}

console.log(names);
console.log("Length of the list: "+ names.length);
// Task 16
// More Guests: You just found a bigger dinner table, so now more space is available.

let names = ["Junaid", "Fatima", "Ahmed"];

names.forEach((element) => {
  console.log(
    `Dear ${element}! I've found a bigger table so more of our friends would be joining us at dinner`
  );
});

// adding new friend to the beginning of array
names.unshift("Haleema");

// adding new friend at the middle of array
names.splice(2, 0, "Azeem");

// adding new friend at the end of array
names.push("Sohaib");

names.forEach((element) => {
  console.log(
    `Dear ${element}! Could you please come to my house for dinner today.`
  );
});
console.log(names);
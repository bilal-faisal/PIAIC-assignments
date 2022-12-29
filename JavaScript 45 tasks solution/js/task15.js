// Task 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let names = ["Junaid", "Fatima", "Ali"];

// using loop
console.log("1st guest list invitations");
names.forEach((element) => {
  console.log(
    `Dear ${element}! Could you please come to my house for dinner today.`
  );
});

console.log(`${names[2]} can't make it to dinner today.`);

// replacing the element if you know the index
// names[2] = "Ahmed";

// replacing the element if you don't know the index
names.forEach(function (elem, i) {
  if (elem === "Ali") {
    names[i] = "Ahmed";
  }
});


// using loop
console.log("2nd guest list invitation");
names.forEach((element) => {
    console.log(
      `Dear ${element}! Could you please come to my house for dinner today.`
    );
  });
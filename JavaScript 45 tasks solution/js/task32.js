// Task 32
// Checking Usernames

let current_users = ["admin", "bilal31", "faisal", "hashmi", "kibriya"];

let new_users = ["Bilal31", "umaima", "hamna", "hashmi", "jalandhar"];

new_users.forEach((elem) => {
  let regex = new RegExp(elem, "ig");
  let match = false;

  current_users.forEach((element) => {
    if (regex.test(element)) {
      match = true;
    }
  });

  if (match) {
    console.log("You will need to enter a new username");
  } else {
    console.log("The username is available");
  }
});

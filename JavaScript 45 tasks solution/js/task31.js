// Task 31
// No Users

let usernames = ["admin", "bilal31", "faisal", "hashmi", "kibriya"];

// removing all elements
usernames.length = 0;

if (usernames.length === 0) {
  console.log("We need to find some users");
} else {
  usernames.forEach((element) => {
    if (element === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${element}, thank you for logging in again.`);
    }
  });
}

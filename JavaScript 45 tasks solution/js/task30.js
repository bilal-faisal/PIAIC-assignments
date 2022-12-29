// Task 30
// Hello Admin

let usernames = ['admin', 'bilal31', 'faisal', 'hashmi', 'kibriya'];

usernames.forEach(element => {
    if(element === 'admin'){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
});
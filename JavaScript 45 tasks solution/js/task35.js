// Task 35
// Animals

let animals = ['Tiger', 'Lion', 'Elephant'];
let vowels = ["a","e","i","o","u"];

animals.forEach(element => {
    console.log(`${(vowels.includes(element[0].toLowerCase())) ? "An" : "A"} ${element} is soo scary`);
});

console.log("They are all soo scary");
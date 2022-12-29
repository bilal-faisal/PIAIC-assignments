// Task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after 
// striping the white spaces.

let person_name = "   \n\n\t Bilal faisal     \t\n  ";
let result = person_name.trim();

console.log("Name with white spaces: " + person_name);
console.log("Name without white spaces: " + result);

document.getElementById("result").innerHTML = result;


// Task 7
// Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations
// in print statements to see the results.

let addition = 4 + 4;
let subtraction = 10 - 2;
let multiplication = 4 * 2;
let division = 16 / 2;

let result = `Addition : ${addition}<br>
              Subtraction : ${subtraction}<br>
              Multiplication : ${multiplication}<br>
              Division : ${division}`;
              
console.log(result);
document.getElementById("result").innerHTML = result;

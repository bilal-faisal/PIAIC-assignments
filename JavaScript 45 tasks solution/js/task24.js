// Task 24

// Tests for equality and inequality with strings

console.log('Shabana' == 'ShabAnA');    // false

console.log('Shabana' != 'ShabAnA');    // true

console.log(0 != "0");                  // false

console.log(0 !== "0");                 // true 

// Tests using the lower case function

console.log('Shabana'.toLowerCase() === 'shabana');  // true

console.log('Shabana'.toLowerCase() == 'sHabAna'.toUpperCase());  // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(1 == 1.0);          // true

console.log(1.01 + 2.01 == 3.02);     // false
console.log(1.01 + 2.01 === 3.02);    // false  cuz its 3.0199999999999996

console.log(2 > 1.99);          // true

console.log(2 >= 2.0);          // true

console.log(2 >= 2.01);         // false

// Tests using "and" and "or" operators

console.log(true && true);      // true
console.log(true && false);     // false

console.log(true || true);      // true
console.log(true || false);     // true

console.log('23' || '24');      // 23
console.log('0' || '23');       // 0
console.clear()
console.log(0 || 24);           // 24
console.log(0 || 0);            // 0
console.log(0 || 1);            // 0

// Test whether an item is in a array

let nums = [1,2,3,4];

console.log(3 in nums)             // true      represents index
console.log(3.0 in nums)           // true
console.log(3.01 in nums)          // false
console.log(4 in nums)             // false

console.log(nums.includes(2));    // true
console.log(nums.includes(2.5));    // false

// Test whether an item is not in a array

console.log(!(34 in nums))             // true

console.log(nums.indexOf(5) === -1);    // true








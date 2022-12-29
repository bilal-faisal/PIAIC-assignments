// Task 11
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

let names = ["Junaid", "Fatima", "Ali", "Azeem"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// using loop
names.forEach(element => {
    console.log(element);
});

// display
document.getElementById("result").innerHTML = `
                                                <ul>
                                                    <li>${names[0]}</li>
                                                    <li>${names[1]}</li>
                                                    <li>${names[2]}</li>
                                                    <li>${names[3]}</li>
                                                </ul>    
                                            `;


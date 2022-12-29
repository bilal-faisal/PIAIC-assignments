// Task 21
// Write a program that creates Objects containing these items

let student1 = {
    name: "Bilal Faisal",
    age: 21,
    degree: "BSIT",
    language: "JavaScript",
    course: "Web3.0 & Metaverse"
}

for (const key in student1) {
    console.log("Key: " + key + ", Value: " + student1[key]);
}
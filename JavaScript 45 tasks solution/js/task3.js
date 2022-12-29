// Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase.


let person_name = "biLaL fAiSaL";

let lowerCaseName = person_name.toLowerCase();
let upperCaseName = person_name.toUpperCase();
let titleCaseName = toTitleCase(person_name);

function toTitleCase(name) {
  let arr = name.toLowerCase().split(" ");
  let str = "";
  arr.forEach((element) => {
    str += element[0].toUpperCase() + element.slice(1) + " ";
  });
  return str;
}

let result = `<p>
                Your name in lower case: <b>${lowerCaseName}</b><br>
                Your name in upper case: <b>${upperCaseName}</b><br> 
                Your name in title case: &nbsp;&nbsp;&nbsp;<b>${titleCaseName}</b>
              </p>`;
              
console.log(result);
document.getElementById("result").innerHTML = result;

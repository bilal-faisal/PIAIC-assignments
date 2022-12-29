// Task 20
// Think of something you could store in a array.
// Write a program that creates a list containing these items.

let languages = ["Urdu", "English", "Pashto", "Siraiki", "Chineese"];


// One way

let result = "";
languages.forEach((element) => {
  result += `<li>${element}</li>`;
});

document.getElementById("result").innerHTML = `<ul>${result}</ul>`;


// Other way

let ul = document.createElement("ul");

languages.forEach((element) => {
  let li = document.createElement("li");
  li.innerText = element;
  ul.appendChild(li);
});

document.getElementById("result").appendChild(ul);

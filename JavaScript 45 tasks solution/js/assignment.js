{
  // Task 1

  console.log("VS code & Nodejs Installed");
}

{
  // Task 2
  let person_name = "Bilal";

  let result = `Hello ${person_name}, would you like to learn some Python today?`;

  console.log(result);
}

{
  // Task 3

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
}

{
  // Task 4
  let result = `Margaret Mead once said, "Always remember that you are absolutely unique. Just like everyone else."`;

  console.log(result);
}

{
  // Task 5

  let famous_person = "Margaret Mead";

  let message = `${famous_person} once said, "Always remember that you are absolutely unique. Just like everyone else."`;

  console.log(message);
}

{
  // Task 6

  let person_name = "   \n\n\t Bilal faisal     \t\n  ";
  let result = person_name.trim();

  console.log("Name with white spaces: " + person_name);
  console.log("Name without white spaces: " + result);
}

{
  // Task 7

  let addition = 4 + 4;
  let subtraction = 10 - 2;
  let multiplication = 4 * 2;
  let division = 16 / 2;

  let result = `Addition : ${addition}<br>
              Subtraction : ${subtraction}<br>
              Multiplication : ${multiplication}<br>
              Division : ${division}`;

  console.log(result);
}

{
  // Task 8

  console.log(4 + 4);
  console.log(10 - 2);
  console.log(2 * 4);
  console.log(16 / 2);
}

{
  // Task 9

  let favorite_num = 34;
  let message = `My favourite number is ${favorite_num}.`;

  console.log(message);
}

{
  // Task 10

  // Addition
  console.log(4 + 4);
  // Subtraction
  console.log(10 - 2);
  // Multiplication
  console.log(2 * 4);
  // Division
  console.log(16 / 2);

  // Adding comments to Task9
  // Date: 3/10/22
  // This program displays my favourite number with a message

  // Initializing my favourite number into a variable named favourite_num
  let favorite_num = 34;
  // Adding message to it
  let message = `My favourite number is ${favorite_num}.`;
  // Printing message including favourite_num
  console.log(message);
}

{
  // Task 11
  let names = ["Junaid", "GanduRao", "Ali", "Azeem"];

  console.log(names[0]);
  console.log(names[1]);
  console.log(names[2]);
  console.log(names[3]);

  // using loop
  names.forEach((element) => {
    console.log(element);
  });
}

{
  // Task 12
  // Greetings: Start with the array you used in Exercise 11, but instead of just
  // printing each person’s name, print a message to them. The text of each message
  // should be the same, but each message should be personalized with the person’s name.

  let names = ["Junaid", "GanduRao", "Ali", "Azeem"];

  // individually
  console.log("Hello! " + names[0]);
  console.log("Hello! " + names[1]);
  console.log("Hello! " + names[2]);
  console.log("Hello! " + names[3]);

  // using loop
  names.forEach((element) => {
    console.log(`Hello! ${element}`);
  });

  // display
  let result = "";
  names.forEach((element) => {
    result += `<li>Hello! ${element}</li>`;
  });
}

{
  // Task 13

  let modes = ["Honda", "Yahama", "BMW"];

  console.log(`I would like to own a ${modes[0]} motorcycle.`);
  console.log(`I would like to drive a ${modes[2]} car.`);
}

{
  // Task 14

  let names = ["Junaid", "GanduRao", "Ali"];

  // using loop
  names.forEach((element) => {
    console.log(
      `Dear ${element}! Could you please come to my house for dinner today`
    );
  });
}

{
  // Task 15
  let names = ["Junaid", "GanduRao", "Ali"];

  // using loop
  console.log("1st guest list invitations");
  names.forEach((element) => {
    console.log(
      `Dear ${element}! Could you please come to my house for dinner today.`
    );
  });

  console.log(`${names[2]} can't make it to dinner today.`);

  // replacing the element if you know the index
  // names[2] = "Ahmed";

  // replacing the element if you don't know the index
  names.forEach(function (elem, i) {
    if (elem === "Ali") {
      names[i] = "Ahmed";
    }
  });

  // using loop
  console.log("2nd guest list invitation");
  names.forEach((element) => {
    console.log(
      `Dear ${element}! Could you please come to my house for dinner today.`
    );
  });
}

{
  // Task 16
  let names = ["Junaid", "GanduRao", "Ahmed"];

  names.forEach((element) => {
    console.log(
      `Dear ${element}! I've found a bigger table so more of our friends would be joining us at dinner`
    );
  });

  // adding new friend to the beginning of array
  names.unshift("GhanpatRao");

  // adding new friend at the middle of array
  names.splice(2, 0, "Azeem");

  // adding new friend at the end of array
  names.push("Sohaib");

  names.forEach((element) => {
    console.log(
      `Dear ${element}! Could you please come to my house for dinner today.`
    );
  });
  console.log(names);
}

{
  // Task 17

  let names = ["GhanpatRao", "Junaid", "Azeem", "Ahmed", "Sohaib"];

  console.log("You can invite only two people for dinner");

  const run_loop_x_times = names.length - 2;
  for (let i = 0; i < run_loop_x_times; i++) {
    let nm = names.shift();
    console.log("Sorry " + nm + "! Can't invite you to dinner");
  }

  names.forEach((element) => {
    console.log(`Dear ${element}! You're still invited to dinner.`);
  });

  const run_loop_y_times = names.length;
  for (let i = 0; i < run_loop_y_times; i++) {
    names.shift();
  }

  console.log(names);
  console.log("Length of the list: " + names.length);
}

{
  // Task 18
  // Seeing the World

  // Store the locations in a array. Make sure the array is not in alphabetical order.
  let places = ["Mexico", "Bisha", "Paris", "London", "Kashmir"];

  // Print your array in its original order.
  console.log("Original Array " + places);

  // Print your array in alphabetical order without modifying the actual list.
  let sortedArray = [...places].sort();
  console.log("Sorted Array " + sortedArray);

  // Show that your array is still in its original order by printing it.
  console.log("Original Array is not chenged" + places);

  // Print your array in reverse alphabetical order without changing the order of the original list.
  let reverseSortedArray = [...sortedArray].reverse();
  console.log("Reverse sorted array " + reverseSortedArray);

  // Show that your array is still in its original order by printing it again.
  console.log("Original Array is still not chenged" + places);

  // Reverse the order of your list. Print the array to show that its order has changed.
  places.reverse();
  console.log("Original Array is reversed" + places);

  // Reverse the order of your list again. Print the list to show it’s back to its original order.
  places.reverse();
  console.log("Original Array which was reversed is reversed again" + places);

  // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
  places.sort();
  console.log("Original Array is sorted" + places);

  // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
  places.reverse();
  console.log("Original Array which was sorted is now reversed" + places);
}

{
  // Task 19
  // Dinner Guests: Working with one of the programs from Exercises 14 through 18,
  // print a message indicating the number of people you are inviting to dinner.

  // In Task 16 we had this array with us left at the end
  let names = ["GhanpatRao", "Junaid", "Azeem", "GanduRao", "Ahmed", "Sohaib"];

  // calculating the no of people we're inviting to dinner
  let count = names.length;

  console.log("We are inviting " + count + " persons to dinner");
}

{
  // Task 20

  let languages = ["Urdu", "English", "Pashto", "Siraiki", "Chineese"];

  // One way

  let result = "";
  languages.forEach((element) => {
    result += `<li>${element}</li>`;
  });

  console.log(result);
  // Other way

  let ul = document.createElement("ul");

  languages.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
  console.log(ul);
}

{
  // Task 21

  let student1 = {
    name: "Bilal Faisal",
    age: 21,
    degree: "BSIT",
    language: "JavaScript",
    course: "Web3.0 & Metaverse",
  };

  for (const key in student1) {
    console.log("Key: " + key + ", Value: " + student1[key]);
  }
}

{
  // Task 22f
  const names = [
    "GhanpatRao",
    "Junaid",
    "Azeem",
    "GanduRao",
    "Ahmed",
    "Sohaib",
  ];

  // Error
  // console.log(names.indexOf("Azeem") = 1);

  // Will return undefined
  // console.log(names[10]);
}

{
  // Task 23
  // Conditional Tests like this:
  // let car = 'subaru';

  // console.log("Is car == 'subaru'? I predict True.")
  // console.log(car == 'subaru')

  let name = "Shabana";
  console.log(name === "Shabana"); // true

  let a = "0";
  console.log(typeof a === "string"); // true

  console.log("0" == 0); // true
  console.log("0" === 0); // false

  console.log(null == ""); // false

  console.log("" == " "); // false

  console.log(null === undefined); // false
}

{
  // Task 24

  // Tests for equality and inequality with strings

  console.log("Shabana" == "ShabAnA"); // false

  console.log("Shabana" != "ShabAnA"); // true

  console.log(0 != "0"); // false

  console.log(0 !== "0"); // true

  // Tests using the lower case function

  console.log("Shabana".toLowerCase() === "shabana"); // true

  console.log("Shabana".toLowerCase() == "sHabAna".toUpperCase()); // false

  // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

  console.log(1 == 1.0); // true

  console.log(1.01 + 2.01 == 3.02); // false
  console.log(1.01 + 2.01 === 3.02); // false  cuz its 3.0199999999999996

  console.log(2 > 1.99); // true

  console.log(2 >= 2.0); // true

  console.log(2 >= 2.01); // false

  // Tests using "and" and "or" operators

  console.log(true && true); // true
  console.log(true && false); // false

  console.log(true || true); // true
  console.log(true || false); // true

  console.log("23" || "24"); // 23
  console.log("0" || "23"); // 0
  console.clear();
  console.log(0 || 24); // 24
  console.log(0 || 0); // 0
  console.log(0 || 1); // 0

  // Test whether an item is in a array

  let nums = [1, 2, 3, 4];

  console.log(3 in nums); // true      represents index
  console.log(3.0 in nums); // true
  console.log(3.01 in nums); // false
  console.log(4 in nums); // false

  console.log(nums.includes(2)); // true
  console.log(nums.includes(2.5)); // false

  // Test whether an item is not in a array

  console.log(!(34 in nums)); // true

  console.log(nums.indexOf(5) === -1); // true
}

{
  // Task 25
  // if-task

  function game(player) {
    if (player.alien_color === "green") {
      console.log(player.name + " has just earned 5 points");
    }
  }

  let player1 = {
    name: "Player1",
    alien_color: "green",
  };

  let player2 = {
    name: "Player2",
    alien_color: "yellow",
  };

  let player3 = {
    name: "Player3",
    alien_color: "red",
  };

  game(player1);
  game(player2);
  game(player3);
}

{
  // Task 26
  // if-else task

  function game(player) {
    if (player.alien_color === "green") {
      console.log(player.name + " has just earned 5 points");
    } else {
      console.log(player.name + " has just earned 10 points");
    }
  }

  let player1 = {
    name: "Player1",
    alien_color: "green",
  };

  let player2 = {
    name: "Player2",
    alien_color: "yellow",
  };

  let player3 = {
    name: "Player3",
    alien_color: "red",
  };

  game(player1);
  game(player2);
  game(player3);
}

{
  // Task 27
  // if-else-if task

  function game(player) {
    if (player.alien_color === "green") {
      console.log(player.name + " has just earned 5 points");
    } else if (player.alien_color === "yellow") {
      console.log(player.name + " has just earned 10 points");
    } else if (player.alien_color === "red") {
      console.log(player.name + " has just earned 15 points");
    }
  }

  let player1 = {
    name: "Player1",
    alien_color: "green",
  };

  let player2 = {
    name: "Player2",
    alien_color: "yellow",
  };

  let player3 = {
    name: "Player3",
    alien_color: "red",
  };

  game(player1);
  game(player2);
  game(player3);
}
{
  // Task 28
  // Stages of Life

  let age = 21;

  if (age < 2) {
    console.log("The person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
  } else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
  } else if (age >= 65) {
    console.log("The person is an elder");
  }
}

{
  // Task 29
  // Favourite Fruit

  let favorite_fruits = ["Mango", "Banana", "Apple"];

  if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas!");
  }
  if (favorite_fruits.includes("Guava")) {
    console.log("You really like Guavas!");
  }
  if (favorite_fruits.includes("Pineapple")) {
    console.log("You really like Pineapples!");
  }
  if (favorite_fruits.includes("Tomato")) {
    console.log("You really like Tomatoes!");
  }
  if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apples!");
  }
}
{
  // Task 30
  // Hello Admin

  let usernames = ["admin", "bilal31", "faisal", "hashmi", "kibriya"];

  usernames.forEach((element) => {
    if (element === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${element}, thank you for logging in again.`);
    }
  });
}

{
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
}

{
  // Task 32
  // Checking Usernames

  let current_users = ["admin", "bilal31", "faisal", "hashmi", "kibriya"];

  let new_users = ["Bilal31", "umaima", "hamna", "hashmi", "jalandhar"];

  new_users.forEach((elem) => {
    let regex = new RegExp(elem, "ig");
    let match = false;

    current_users.forEach((element) => {
      if (regex.test(element)) {
        match = true;
      }
    });

    if (match) {
      console.log("You will need to enter a new username");
    } else {
      console.log("The username is available");
    }
  });
}

{
  // Task 33
  // Ordinal Numbers

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((num) => {
    if (num === 1) {
      console.log("1st");
    } else if (num === 2) {
      console.log("2nd");
    } else if (num === 3) {
      console.log("3rd");
    } else {
      console.log(`${num}th`);
    }
  });
}

{
  // Task 34
  // Pizzas

  let fav_pizzas = ["Fajita", "Pepperoni", "Sicilian"];

  fav_pizzas.forEach((element) => {
    console.log(`I like ${element} pizza.`);
  });

  console.log("I really love pizza!");
}

{
  // Task 35
  // Animals

  let animals = ["Tiger", "Lion", "Elephant"];
  let vowels = ["a", "e", "i", "o", "u"];

  animals.forEach((element) => {
    console.log(
      `${
        vowels.includes(element[0].toLowerCase()) ? "An" : "A"
      } ${element} is soo scary`
    );
  });

  console.log("They are all soo scary");
}

{
  // Task 36
  // T-shirt

  function make_shirt(size, msg) {
    console.log(
      `Make shirt of size ${size} with customized message "${msg}" printed on it.`
    );
  }

  make_shirt("XL", "Life is phunny");
}

{
  // Task 37
  // Modify T-shirt

  function make_shirt(size = "Large", msg = "I love Javascript") {
    console.log(
      `Make shirt of size ${size} with customized message "${msg}" printed on it.`
    );
  }

  // make shirt of large size with default message
  make_shirt();

  // make shirt of medium side with default message
  make_shirt("Medium");

  // make shirt of any size with customized message
  make_shirt("XL", "Life is phunny");
}

{
  // Task 38
  // Cities

  function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
  }

  describe_city("Lahore");
  describe_city("Peshawar");
  describe_city("Dehli", "India");
}

{
  // Task 39
  // City Names

  function city_country(city, country) {
    return `"${city}, ${country}"`;
  }

  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Peshawar", "Pakistan"));
  console.log(city_country("Dehli", "India"));
}

{
  // Task 40
  // Album

  function make_album(name, title, track_count = -1) {
    let person_obj = {
      artist_name: name,
      album_title: title,
    };

    if (track_count !== -1) {
      person_obj.tracks = track_count;
    }

    return person_obj;
  }

  console.log(make_album("Tailor", "Blank Space"));
  console.log(make_album("Atif", "Dooriyan"));
  console.log(make_album("Arijit", "Aaashiqui", 5));
}

{
  // Task 41
  // Magicians

  let magicians = ["Bob", "Harry", "Arshad", "Gupta"];

  function show_magicians(arr) {
    arr.forEach((element) => {
      console.log(element);
    });
  }

  show_magicians(magicians);
}

{
  // Task 42
  // Great Magicians

  function make_great(arr) {
    arr.forEach((element, i) => {
      arr[i] = `Great ${element}`;
    });
  }

  function show_magicians(arr) {
    arr.forEach((element) => {
      console.log(element);
    });
  }

  let magicians = ["Bob", "Harry", "Arshad", "Gupta"];

  make_great(magicians);
  show_magicians(magicians);
}

{
  // Task 42
  // Unchanged Magicians

  function make_great(arr) {
    arr.forEach((element, i) => {
      arr[i] = `Great ${element}`;
    });
    return arr;
  }

  function show_magicians(arr) {
    arr.forEach((element) => {
      console.log(element);
    });
  }

  let magicians = ["Bob", "Harry", "Arshad", "Gupta"];

  let modified_magicians = make_great([...magicians]);

  // Array with original names
  show_magicians(magicians);

  // Array with modified names
  show_magicians(modified_magicians);
}

{
  // Task 44
  // Sandwiches

  function make_sandwich(arr) {
    let str = "New order has been placed of sandwich having ";
    arr.forEach((element, i) => {
      str += `${element}${i + 1 === arr.length ? "" : ", "}`;
    });
    str += " and should be packed perfectly.";
    console.log(str);
  }

  make_sandwich(["mushrooms", "olives", "salad", "meat"]);
  make_sandwich(["mushrooms", "olives"]);
  make_sandwich(["mushrooms", "salad", "meat"]);
}

{
  // Task 45
  // Cars

  function store_car_info(manf_name, model, obj = "") {
    let car_obj = {
      manufacturer_name: manf_name,
      model_name: model,
    };

    for (const key in obj) {
      car_obj[key] = obj[key];
    }

    return car_obj;
  }

  console.log(store_car_info("ghj", "bjh"));
  console.log(store_car_info("ghj", "bjh", { color: "red" }));
  console.log(
    store_car_info("ghj", "bjh", { color: "black", condition: "Good" })
  );
}

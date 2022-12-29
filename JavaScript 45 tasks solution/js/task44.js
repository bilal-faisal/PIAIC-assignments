// Task 44
// Sandwiches

function make_sandwich(arr) {
  let str = "New order has been placed of sandwich having ";
  arr.forEach((element, i) => {
    str += `${element}${(i+1 === arr.length) ? "" : ", " }`;
  });
  str += " and should be packed perfectly.";
  console.log(str);
}

make_sandwich(["mushrooms", "olives", "salad", "meat"]);
make_sandwich(["mushrooms", "olives"]);
make_sandwich(["mushrooms", "salad", "meat"]);

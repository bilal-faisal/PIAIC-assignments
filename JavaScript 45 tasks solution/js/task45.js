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
console.log(store_car_info("ghj", "bjh", { color: "red"}));
console.log(store_car_info("ghj", "bjh", { color: "black", condition: "Good" }));

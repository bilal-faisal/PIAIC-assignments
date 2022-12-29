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

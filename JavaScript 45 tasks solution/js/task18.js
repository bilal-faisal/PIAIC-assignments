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

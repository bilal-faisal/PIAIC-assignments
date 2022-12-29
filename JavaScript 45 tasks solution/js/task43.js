// Task 42
// Unchanged Magicians

function make_great(arr){
    arr.forEach((element,i) => {
        arr[i] = `Great ${element}`
    });
    return arr;
}

function show_magicians(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

let magicians = ['Bob', 'Harry', 'Arshad', 'Gupta'];

let modified_magicians = make_great([...magicians]);

// Array with original names
show_magicians(magicians);

// Array with modified names
show_magicians(modified_magicians);
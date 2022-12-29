// Task 42
// Great Magicians

function make_great(arr){
    arr.forEach((element,i) => {
        arr[i] = `Great ${element}`
    });
}

function show_magicians(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

let magicians = ['Bob', 'Harry', 'Arshad', 'Gupta'];

make_great(magicians)
show_magicians(magicians);
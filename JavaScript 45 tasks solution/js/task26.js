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

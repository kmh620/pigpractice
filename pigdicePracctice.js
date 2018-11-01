function rollSingleDice()
{
    return Math.floor(Math.random()*6+1);
}


function rollDice(player) {
// var score = 0;
// var playerScore;
//     do {
//         roll1 = rollSingleDice();
//         roll2 = rollSingleDice();
//         score = roll1 + roll2;
//         player.addToScore(score);
//         playerScore = player.getScore();
//         console.log("Roll 1: " + roll1 + " Roll 2: " + roll2 + " Total Score: " + playerScore);
//
//         if (roll1 == roll2) {
//             if (roll1 === 1) {
//
//                 return true;
//             } else {
//                 console.log("Congrats! Double Thrown!");
//             }
//         }
//     } while (roll1 === roll2);
//     return false;
// } this is our 'if...else' for score


function Player(name) {
  this.name = name;
  var score = 0; // this is a private attribute
  this.addToScore = function(points) {
    score = score + points;
  };
  this.getScore = function() {
    return score;
  };
}

var player1 = new Player(//"?");
var turn = true;
while(turn === true) {
    turn = rollDice(player1);
}

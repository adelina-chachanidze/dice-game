var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceOne = "dice" + randomNumber1 + ".png";
var randomDiceTwo = "dice" + randomNumber2 + ".png";

var diceOne = document.querySelectorAll("img") [0];
diceOne.setAttribute ("src", randomDiceOne);

var diceTwo = document.querySelectorAll("img") [1];
diceTwo.setAttribute ("src", randomDiceTwo);


if (randomNumber1 > randomNumber2) {
    document.querySelector ("h1").innerHTML = "Player 1 Wins!";
    }
    else if
    (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";   
    }
    else {document.querySelector("h1").innerHTML = "It's a Draw!";}

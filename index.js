//generate number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

//storing the attribute of an element
var randomDice1 = "images/dice" +randomNumber1+ ".png";
var randomDice2 = "images/dice" +randomNumber2+ ".png";

//changing the attribute for image 1
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice1);
//changing the attribute for image 2
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

//determines which player wins.
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!.";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!.";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

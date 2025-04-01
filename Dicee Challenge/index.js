//Left side image JS
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1 - dice2
var randomImageSource = "images/" + randomDiceImage; //source - images/dice1.img to images/dice2.img
var image1 = document.querySelectorAll("img")[0]; //DOM
image1.setAttribute("src", randomImageSource); //set attribute for random image
//Right side Image JS
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//Condition checking
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";  
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
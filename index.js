var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomdiceimg = "dice" + randomNumber1 + ".png";
var randomimgsrc = "images/" + randomdiceimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomdiceimg2 = "dice" + randomNumber2 + ".png";
var randomimgsrc2 = "images/" + randomdiceimg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

function locationreload() {
  location.reload();
}

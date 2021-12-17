var player1,player2;
var flag = false;

function addname()
{
    player1 = prompt("Enter Player1 Name:");
    player2 = prompt("Enter Player2 Name:");

    document.querySelectorAll("p")[0].innerHTML = player1;
    document.querySelectorAll("p")[1].innerHTML = player2;
    flag = true;

}



function rollDice()
{
    if(flag === false)
    {
        alert("Please Enter the players name first: ");
        return;
    }
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

//for image 1
var image1source = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",image1source);

// for image 2
var image2source = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",image2source);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩" + player1 + " wins";
}

else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = player2 + " wins🚩";
}

else
    document.querySelector("h1").innerHTML = "Match Draw";  
}

//My Method

// if(randomNumber1 === 1)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }

// else if(randomNumber1 === 2)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }

// else if(randomNumber1 === 3)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// }

// else if(randomNumber1 === 4)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }

// else if(randomNumber1 === 5)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// }

// else
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }

// if(randomNumber2 === 1)
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// }

// else if(randomNumber2 === 2)
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// }

// else if(randomNumber2 === 3)
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// }

// else if(randomNumber2 === 4)
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// }

// else if(randomNumber2 === 5)
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// }

// else
// {
//     document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
// }

     

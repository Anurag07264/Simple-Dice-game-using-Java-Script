var randomNumber=Math.floor(Math.random()*6)+1;
var image="images/dice"+randomNumber+".png";
var randomNumber1=Math.floor(Math.random()*6)+1;
var image2="images/dice"+randomNumber1+".png";

if(randomNumber>randomNumber1)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(randomNumber<randomNumber1){
     document.querySelector("h1").textContent="Player 2 Wins";
}
else{
     document.querySelector("h1").textContent="Draw";
}
 document.querySelectorAll("img")[0].setAttribute("src",image);
 document.querySelectorAll("img")[1].setAttribute("src",image2);


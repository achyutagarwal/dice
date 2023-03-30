var randomnumber1;
randomnumber1=(Math.floor(Math.random()*6))+1;
var randomnumber2=(Math.floor(Math.random()*6))+1;
var randomimagesource1= "images/dice"+randomnumber1+".png";
var randomimagesource2= "images/dice"+randomnumber2+".png";
document.querySelector(".img1").setAttribute("src",randomimagesource1);
document.querySelector(".img2").setAttribute("src",randomimagesource2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
// switch (randomnumber1) {
//     case "1":
//         document.querySelector(".img1").setAttribute("src","images/dice1.png");

//         break;
//     case "2":
//         document.querySelector(".img1").setAttribute("src","images/dice2.png");
//         break;
//     case "3":
//         document.querySelector(".img1").setAttribute("src","images/dice3.png");
//         break;
//     case "4":
//         document.querySelector(".img1").setAttribute("src","images/dice4.png");
//         break;
//     case "5":
//         document.querySelector(".img1").setAttribute("src","images/dice5.png");
//         break;    
//     case "6":
//         document.querySelector(".img1").setAttribute("src","images/dice6.png");
//         break;
//     default:
//         break;
// }
// switch (randomnumber2) {
//     case 1:
//         document.querySelector(".img2").setAttribute("src","images/dice1.png");

//         break;
//     case 2:
//         document.querySelector(".img2").setAttribute("src","images/dice2.png");
//     case 3:
//         document.querySelector(".img2").setAttribute("src","images/dice3.png");
//     case 4:
//         document.querySelector(".img2").setAttribute("src","images/dice4.png");
//     case 5:
//         document.querySelector(".img2").setAttribute("src","images/dice5.png");    
//     case 6:
//         document.querySelector(".img2").setAttribute("src","images/dice6.png");
//     default:
//         break;
// }
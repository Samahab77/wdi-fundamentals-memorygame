
//var cardOne = cards[0];
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour ="king";



var cards=["king","king","queen","queen"];
var cardsInPlay=[cardOne,cardTwo];
var cardOne =cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo =cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king")

if(cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match");
}
else {
	alert("sorry try agin");
}
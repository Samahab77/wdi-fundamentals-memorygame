



var cards=[
{
	rank: "queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit:"diamonds"	,
	cardImage:"images/queen-of-hearts.png"
},
{

	rank: "king",
	suit:"diamonds"	,
	cardImage:"images/king-of-hearts.png"	
},
{
	rank: "king",
	suit:"hearts"	,
	cardImage:"images/king-of-diamonds.png"
	}
	]

var cardsInPlay=[];



var checkForMatch= function(){
	if(cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match");
}
else {
	alert("sorry try agin");
}

}

var flipCard =function(){

	this.getAttribute('data-id');
	flipCard.setAttribute('src','images/back.png');
	console.log('cards[cardId]'.cardImage);
    //cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

var createBoard=function(){

	for (var i=0; i <cards.length; i++) {

    var cardElement=document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',cards[i]);
    cardElement.addEventListener('click',flipCard());
     document.getElementById('game-board').appendChild(newItem); 
}
};

createBoard();





























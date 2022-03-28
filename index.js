player ={
    name : 'Kelvin',
    chips: 1000 
};
// variable declaration
let sum = 0;
let cards =[];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let plalyerEl = document.querySelector("#player-el");

plalyerEl.textContent = player.name + ": $ " + player.chips;

// generates random black jack games
function getRandomNumber(){
    let random = Math.floor(Math.random()* 13) + 1;

    if (random > 10){
        return 10;
    }

    else if (random === 1 ){
        return 11;
    }
    else{
        return random;
    }    
}

function startGame(){
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    let sum = firstCard + secondCard ;
    let cards = [firstCard,secondCard];
    renderGame();
}
function renderGame(){

    if (sum <= 20 ){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message ="Wohoo! You got a black jack"
        hasBlackJack = true;
    }
    else{
        message="You are out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent ="Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";

    }

}


function newCard(){
    if (isAlive === true && hasBlackJack === false ){
        let newCard =  getRandomNumber();
        sum += newCard;
        cards.push(newCard)
        startGame();
    
    }
}

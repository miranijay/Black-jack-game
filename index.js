let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const player = {
    name: "Jay",
    chips: "200",
}

const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#card-el");
const newCardBtn = document.querySelector("#new-card");
const playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if( sum <=20 ) {
        message = "Do you want to draw a new card? "
    } else if( sum === 21) {
        message = "Wohoo ! you've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame();
}

function newCard() {
    if( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();    
    }
}

function getRandomCard() {
    let randomNum =  Math.floor(Math.random() * 13) + 1;
    if( randomNum > 10 ){
        return 10;
    } else if( randomNum === 1) {
        return 11;
    } else {
        return randomNum;
    }s
}

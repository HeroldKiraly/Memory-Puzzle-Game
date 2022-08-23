console.log('flipCardScript.js LOADED');

import { lives } from './GameGen.js';

const runFunction = () => {

//VARIABLES
  const cards = document.querySelectorAll('.card');
  let hasFlippedCard = false;
  let lockCards = false;
  let firstCard, secondCard;

  function initialFlip() {
    lockCards = true;
    for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('flip');
          }
    setTimeout(() => {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('flip');
      } 
      lockCards = false;
    }, 3000);
    
  }
  initialFlip();

//FLIPS CARD ON CLICK AND ASSIGNS IT TO VARIABLE
  function flipCard() {
    console.log('clicked card');
    if (lockCards) return;
    this.classList.add('flip'); 

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      firstCard.removeEventListener('click', flipCard);
      return;
    }
    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
  }

//CHECK FOR MATCHING CARDS
  function checkForMatch() {
    if (firstCard.lastElementChild.src === secondCard.lastElementChild.src) {
      console.log('Its a Match');
      disableCards();
      return;
    }
    console.log('Not a Match');
    firstCard.addEventListener('click', flipCard);
    unflipCards();
    if (lives.innerHTML > 0) {
      lives.innerHTML--;
    }
    if (lives.innerHTML == 0) {
      cards.forEach(card => card.removeEventListener('click', flipCard));
      document.getElementById('lives').innerHTML = 'YOU LOSE!';
      
      setTimeout(() => {
        location.reload();
      }, 4000);

    }
    
  }

//DISABLES MATCHED CARDS FROM FLIPPING BACK TO DEFAULT
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

//FLIPS CARDS BACK THAT ARE NOT A MATCH
  function unflipCards() {
    lockCards = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    
      lockCards = false;
    }, 1000);
  }

//ADDS EVENT LISTENER TO CARDS
  cards.forEach(card => card.addEventListener('click', flipCard));
};


export { runFunction };
import { runFunction } from './flipCardScript.js';

console.log('GameGen.js LOADED');

//GLOBAL VARIABLES
let eCardNum = 12;
let mCardNum = 20
let hCardNum = 30;
let lives = document.getElementById('livesNum');

//REMOVES EXISTING GAME ELEMENTS
const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};
const container = document.querySelector('#game-body');

//CREATES GAME
const createGame = (difficulty) => {
    if (difficulty === "easy") {
        removeAllChildNodes(container);

        lives.innerHTML = 5;
        let gameBody = document.getElementById('game-body');
        let easyGameBody = document.createElement('div');
        easyGameBody.id = 'dif-easy';
        
        for (let i = 0; i < eCardNum; i++) {
            let card = document.createElement('div');
            card.className = 'card';
            card.id = i;

            let frontFace = document.createElement('img');
            frontFace.className = 'face front';
            frontFace.src = "/images/cardFront.svg";

            let backFace = document.createElement('img');
            backFace.className = 'face back';
            backFace.id = 'picture' + i;

            card.appendChild(frontFace);
            card.appendChild(backFace);
            easyGameBody.appendChild(card);
            gameBody.appendChild(easyGameBody);
        }
    } else if (difficulty === "medium") {
        removeAllChildNodes(container);

        lives.innerHTML = 3;
        let gameBody = document.getElementById('game-body');
        let mediumGameBody = document.createElement('div');
        mediumGameBody.id = 'dif-medium';
        
        for (let i = 0; i < mCardNum; i++) {
            let card = document.createElement('div');
            card.className = 'card';
            card.id = i;
    
            let frontFace = document.createElement('img');
            frontFace.className = 'face front';
            frontFace.src = "/images/cardFront.svg";
    
            let backFace = document.createElement('img');
            backFace.className = 'face back';
            backFace.id = 'picture' + i;
    
            card.appendChild(frontFace);
            card.appendChild(backFace);
            mediumGameBody.appendChild(card);
            gameBody.appendChild(mediumGameBody);
        }
    } else if (difficulty === "hard") {
        removeAllChildNodes(container);

        lives.innerHTML = 3;
        let gameBody = document.getElementById('game-body');
        let hardGameBody = document.createElement('div');
        hardGameBody.id = 'dif-hard';
        
        for (let i = 0; i < hCardNum; i++) {
            let card = document.createElement('div');
            card.className = 'card';
            card.id = i;
    
            let frontFace = document.createElement('img');
            frontFace.className = 'face front';
            frontFace.src = "/images/cardFront.svg";
    
            let backFace = document.createElement('img');
            backFace.className = 'face back';
            backFace.id = 'picture' + i;
    
            card.appendChild(frontFace);
            card.appendChild(backFace);
            hardGameBody.appendChild(card);
            gameBody.appendChild(hardGameBody);
        }
    } else { 
        console.log('Not a valid difficulty');
    }
    runFunction();
};


export { createGame };
export { eCardNum , mCardNum , hCardNum , lives};
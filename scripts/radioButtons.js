import { createGame } from "./GameGen.js";
import { imageGenerator } from "./imageGen.js";

console.log("radioButtons.js LOADED");

let buttons = document.getElementsByClassName("difficultyBtn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let selected = this.value;

        console.log('Clicked Difficulty Select Button');
        console.log(selected + ' Difficulty');
        
        createGame(selected);
        imageGenerator(selected);
    });
};

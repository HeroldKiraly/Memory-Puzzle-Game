import { createGame } from "./GameGen.js";
import { imageGenerator } from "./imageGen.js";

let buttons = document.getElementsByClassName("difficultyBtn");
//EVENT LISTENER FOR DIFFICULTY BUTTONS
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let selected = this.value;
        //CREATES GAME BASED ON DIFFICULTY
        createGame(selected);
        imageGenerator(selected);
    });
};
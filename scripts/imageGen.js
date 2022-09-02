import { eCardNum , mCardNum , hCardNum } from "./GameGen.js";
import { images } from "./imageArray.js";

// GENERATES IMAGES BASED ON DIFFICULTY SELECTION
const imageGenerator = (difficulty) => {
    let cardBack;
    if (difficulty === 'easy') {
        let easyImages = [];

        for (let i = 0; i < 6; i++) {
            easyImages.push(images[i], images[i]);
        }
        
        let currentIndex = easyImages.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [easyImages[currentIndex], easyImages[randomIndex]] = [easyImages[randomIndex], easyImages[currentIndex]];
        }

        for (let i = 0; i < eCardNum; i++) {
            cardBack = document.getElementById('picture' + i);
            cardBack.src = easyImages[i];
        }

    } else if (difficulty === 'medium') {
        let mediumImages = [];

        for (let i = 0; i < 10; i++) {
            mediumImages.push(images[i], images[i]);
        }
        
        let currentIndex = mediumImages.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [mediumImages[currentIndex], mediumImages[randomIndex]] = [mediumImages[randomIndex], mediumImages[currentIndex]];
        }

        for (let i = 0; i < mCardNum; i++) {
            cardBack = document.getElementById('picture' + i);
            cardBack.src = mediumImages[i];
        }

    } else if (difficulty === 'hard') {
        let hardImages = [];

        for (let i = 0; i < 15; i++) {
            hardImages.push(images[i], images[i]);
        }
        
        let currentIndex = hardImages.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [hardImages[currentIndex], hardImages[randomIndex]] = [hardImages[randomIndex], hardImages[currentIndex]];
        }

        for (let i = 0; i < hCardNum; i++) {
            cardBack = document.getElementById('picture' + i);
            cardBack.src = hardImages[i];
        }
    }
}
export { imageGenerator };
import { morseCode } from "./morse.js";

const inputBox = document.querySelector(".display--input");
const outputBox = document.querySelector(".display--output");
const toEnglishButton = document.querySelector(".button--morseToEnglish");
const toMorseButton = document.querySelector(".button--englishToMorse");


const englishToMorse = (englishStr) => {
    //convert string to array
    const newArr = englishStr.toUpperCase().split("");
    newArr.map(key => {
        return morseCode[key];
    }).join("/");
    return newArr;
}

const handleEnglishToMorse = () => {
    const result = englishToMorse(inputBox.value);
    outputBox.innerHTML = result;
}

toMorseButton.addEventListener("click", handleEnglishToMorse);

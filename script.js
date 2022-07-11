import { morseCode } from "./morse.js";

const inputBox = document.querySelector(".display--input");
const outputBox = document.querySelector(".display--output");
const toEnglishButton = document.querySelector(".button--morseToEnglish");
const toMorseButton = document.querySelector(".button--englishToMorse");
const clearButton = document.querySelector(".button--clear");

//english to morse function
const englishToMorse = (englishStr) => {
    //convert string to array
    const morseTrans = englishStr.toUpperCase().split("").map((key) => {
        return morseCode[key];
    })
    //convert array to string,separated by "/""
    return morseTrans.join("/");
}

//page change by click
const handleEnglishToMorse = () => {
    const result = englishToMorse(inputBox.value);
    outputBox.innerHTML = result;
}
//add event listener to the button
toMorseButton.addEventListener("click", handleEnglishToMorse);


//clear button
const clearAll = () => {
    inputBox.value = "";
    outputBox.innerHTML = "";
}
clearButton.addEventListener("click", clearAll);
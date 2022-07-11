import { morseCode } from "./morse.js";

const inputBox = document.querySelector(".display--input");
const outputBox = document.querySelector(".display--output");
const translateButton = document.querySelector(".button--translate");
const clearButton = document.querySelector(".button--clear");

//english to morse function
export const englishToMorse = (englishStr) => {
    //convert string to array
    const morseTrans = englishStr.toUpperCase().split("").map((key) => {
        return morseCode[key];
    })
    //convert array to string,separated by space" "
    return morseTrans.join(" ");
}

//Confirm translation type
export const handleTranslate = (event) => {
    const content = inputBox.value;
    let result = "";
    if (content === "") {
        result = "Please enter the content to be translated";
    }
    else if (content.includes("/(.-)/g")) {
        result = morseToEnglish(content);
    }
    else {
        result = englishToMorse(content);
    }
    outputBox.innerHTML = result;
}
//add event listener to the button
translateButton.addEventListener("click", handleTranslate);


//clear button
export const clearAll = () => {
    inputBox.value = "";
    outputBox.innerHTML = "";
}
clearButton.addEventListener("click", clearAll);



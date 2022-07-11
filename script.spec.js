import { expect, it } from "@jest/globals";
import { englishToMorse, handleTranslate } from "./script";
import { morseCode, englishDictionary } from "./morse";

//void inputs (Positive tests)
it("should translate English word to morse code", () => {
    const resultOne = handleTranslate("Hello World!");
    expect(resultOne).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--");


    const resultTwo = handleTranslate("SOS");
    expect(resultTwo).toBe("... --- ...");

    const resultThree = handleTranslate("1234567");
    expect(resultThree).toBe(".---- ..--- ...-- ....- ..... -.... --...");
})

//void inputs (Negative tests)
it("should return 'Please enter...' if the input mixture of morse code and English word", () => {
    const result = handleTranslate("");
    expect(result).toBe("Please enter the content to be translated");
})

it("should return invalid if the input mixture of morse code and English word", () => {
    const result = handleTranslate("hel.---.lo");
    expect(result).toBe("Invalid");
})

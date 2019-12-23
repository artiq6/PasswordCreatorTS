// scss styles 
import './style.scss';
import './switch.scss';
import './range.scss';

// checkboxes and slider
let slider = <HTMLInputElement>document.getElementById("rangePassword");
let rangeDigit = document.getElementById("rangeDigit");
let capitalLetters = <HTMLInputElement>document.getElementById("checkboxCapitalLetters");
let specialCharacters = <HTMLInputElement>document.getElementById("checkboxSpecialCharacters");
let button = <HTMLButtonElement>document.getElementById("generate");
//

// event change for slider
slider.addEventListener("input", sliderChange)
function sliderChange() {
    rangeDigit.innerText = slider.value
}

//final password array
let passwordArray: string[] = []
let finalPassword: string[] = [];

//number to ASCII from -> to
function arrayFromCharToLetter(from: number, to: number): string[] {
    let finalArray: string[] = []
    for (let i = from; i <= to; i++) {
        finalArray.push(String.fromCharCode(i))
    }
    return finalArray;
}


//create password function
button.addEventListener("click", generate);
function generate() {
    passwordArray = arrayFromCharToLetter(97, 122);
    finalPassword = [];
    console.log(capitalLetters.checked)
    if (capitalLetters.checked) {
        let capitalArray = arrayFromCharToLetter(65, 90);
        passwordArray = passwordArray.concat(capitalArray);
    }
    if (specialCharacters.checked) {
        let specialcharacters1 = arrayFromCharToLetter(33, 47);
        let specialcharacters2 = arrayFromCharToLetter(58, 64);
        passwordArray = passwordArray.concat(specialcharacters1, specialcharacters2);
    }
    getRandomValues(parseInt(slider.value))
    let passwordOutput = document.getElementById("password");
    passwordOutput.innerText = finalPassword.join("");
}
function getRandomValues(length: number) {
    for (let i = 0; i < length; i++) {
        var randNumber = Math.floor(Math.random() * passwordArray.length)
        finalPassword.push(passwordArray[randNumber])
    }
}

//copy password after clicking password
document.getElementsByClassName("passwordContainer")[0].addEventListener("click",copyPassword);
function copyPassword() {
    var range = document.createRange();
    range.selectNode(document.getElementById("password"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

}



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
slider.addEventListener("input",sliderChange)
function sliderChange(){
  rangeDigit.innerText=slider.value
}

//final password array
let passwordArray:string[] = arrayFromCharToLetter(97,122);
let finalPassword:string[]=[];

//number to ASCII from -> to
function arrayFromCharToLetter(from:number,to:number):string[]{
    let finalArray:string[] = []
    for(let i=from;i<=to;i++){
        finalArray.push(String.fromCharCode(i))
    }
    return finalArray;
}


//Checkboxes:

button.addEventListener("click",generate)
function generate(){
    console.log(capitalLetters.checked)
    if(capitalLetters.checked){
        let capitalArray=arrayFromCharToLetter(65,90);
        passwordArray=passwordArray.concat(capitalArray);
    }
    if(specialCharacters.checked){
        let specialcharacters1=arrayFromCharToLetter(33,47);
        let specialcharacters2=arrayFromCharToLetter(58,64);
        passwordArray=passwordArray.concat(specialcharacters1,specialcharacters2);
    }
    getRandomValues(parseInt(slider.value))
}
function getRandomValues(length:number){
    for(let i = 0; i < length; i++){
        var randNumber = Math.floor(Math.random()*passwordArray.length)
        finalPassword.push(passwordArray[randNumber])
    }
    console.log(finalPassword)
}


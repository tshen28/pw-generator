//============ASSIGNING VARIABLES
//snag the button
//lowercase array
//uppercase array
//numbers array
//spec chars array
//piggybank array
//text output field
//output password

//============PROMPTS / STORING RESPONSES
//listen to the button
//how long is the password? - fallback
//lowercase? (if yes) store in empty piggybank array (concat)
//uppercase?(if yes) store in empty piggybank array
//numbers?(if yes) store in empty piggybank array
//spec chars?(if yes) store in empty piggybank array
//fallback (if no to all char types, restart function)

//============GENERATING / RETURNED PASSWORD
//for loop grab random characters from piggybank array - password length (tempArray)
//join as string
//print generated password onto page

//all character arrays
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];
var piggyBank = [];

var passwordButton = document.querySelector('button');
var passwordOutput = document.querySelector("#password");

//intial prompt for password values
var grabInputValues = function () {
    //turns input into number
    var charactersValue = parseInt(prompt("How many characters would you like your password to contain?"), 10);
    console.log(charactersValue);
    //edge cases
    if (Number.isNaN(charactersValue)) {
        alert("Please provide a number.");
        return null;
    }

    if (charactersValue < 8) {
        alert("Number should be greater than 8.");
        return null;
    }

    if (charactersValue > 128) {
        alert("Number should be less than 128.");
        return null;
    }
    //password content prompts
    var lowerCaseValue = confirm("Click OK to confirm lowercase characters.");
    var upperCaseValue = confirm("Click OK to confirm upper characters.");
    var numericCaseValue = confirm("Click OK to confirm numeric characters.");
    var specialCaseValue = confirm("Click OK to confirm special characters.");

    if (lowerCaseValue) {
        piggyBank = piggyBank.concat(lowerCasedCharacters);
    }
    if (upperCaseValue) {
        piggyBank = piggyBank.concat(upperCasedCharacters);
    }
    if (numericCaseValue) {
        piggyBank = piggyBank.concat(numericCharacters);
    }
    if (specialCaseValue) {
        piggyBank = piggyBank.concat(specialCharacters);
    }
    console.log(piggyBank);

    if (!lowerCaseValue && !upperCaseValue && !numericCaseValue && !specialCaseValue) {
        alert("Must select at least one character type.");
        return null;
    }

    var password = [];
    for (var i = 0; i < charactersValue; i++) {
        var generatePassword = piggyBank[Math.floor(Math.random() * piggyBank.length)];
        password = password.concat(generatePassword);
    }
    password = password.join('');
    console.log(password);
    passwordOutput = alert('Generated password: ' + password);

}

passwordButton.addEventListener("click", grabInputValues);
// Function to generate password

function generatePassword() {
    var length = prompt("How many characters would you like your password to be? (8-128 characters)"); // prompt user for password length and store it in 'length
    while (length < 8 || length > 128) {  // Loops until length meets criteria
        length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    }
// confirm dialogs to include different character types in the password
    var includeUppercase = confirm("WOULD YOU LIKE TO INCLUDE UPPERCASE LETTERS?");
    var includeLowercase = confirm("Would you like to include lowercase letters?");
    var includeNumbers = confirm("Would you like to include numb3rs?");
    var includeSymbols = confirm("Would you like to include spec!al ch@racter$?");

// if user doesnt choose at least one option make them choose again. loops
    while (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("PLEASE! Select at least one option! I need SOMETHING to work with...");
        includeUppercase = confirm("WOULD YOU LIKE TO INCLUDE UPPERCASE LETTERS?");
        includeLowercase = confirm("Would you like to include lowercase letters?");
        includeNumbers = confirm("Would you like to include numb3rs?");
        includeSymbols = confirm("Would you like to include spec!al ch@rcter$?");
    }
// different string chacters the user can choose from. 
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// emptied string to combine users chosen character types
    var allChars = "";
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
// filling the empty string for the password 
    var password = "";
    for (var i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
// generates the password
    return password;
}


// the function to write the generated password to the "input" element
// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// selects the generate button element by its ID
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); // Add event listener to generate button

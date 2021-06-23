// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

    var length = prompt("Enter the length of the password you want.");
    var lowercaseMessage = confirm("Do you want to include lowercase letters in your password?");
    var uppercaseMessage = confirm("Do you want to include uppercase letters in your password?");
    var numbersMessage = confirm("Do you want to include numbers in your password?");
    var specialMessage = confirm("Do you want to include special characters in your password?");
    var allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";


    if (lowercaseMessage == true) {
        var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        allowedCharacters += lowerLetters;
    }
    if (uppercaseMessage == true) {
        var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        allowedCharacters += upperLetters;
    }
    if (numbersMessage == true) {
        var numbers = "0123456789";
        allowedCharacters += numbers;
    }
    if (specialMessage == true) {
        var specialCharacter = " !#$%&()*+,=./:;<=>?@[\\]\"\'^_`{|}~"
        allowedCharacters += specialCharacter;
    }

    for (var i = 0; i < length; i++) {

        var lowerCharacter = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
        password += lowerCharacter;
    }
    return password;

}



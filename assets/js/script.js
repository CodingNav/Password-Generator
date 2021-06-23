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

    var length = prompt("Enter the length of the password you want*\n(Has to be between 8 and 128 characters)");

    if (!(length >= 8 && length <= 128)) {
        alert("Length has to be between 8 to 128 characters.");
        return "";
    }

    var lowercaseMessage = confirm("Do you want to include lowercase letters in your password?");
    var uppercaseMessage = confirm("Do you want to include uppercase letters in your password?");
    var numbersMessage = confirm("Do you want to include numbers in your password?");
    var specialMessage = confirm("Do you want to include special characters in your password?");
    var allowedCharacters = "";
    var password = "";

    if (lowercaseMessage == true) {
        // This will take the set of lowercase letters and add it to that allowedCharacters variable
        var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        allowedCharacters += lowerLetters;
    }
    if (uppercaseMessage == true) {
        // Same setup as lowercase letters, but for uppercase
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
    if (allowedCharacters == "") {
        alert("You need to confirm at least one criteria to generate password");
        return "";
    }

    for (var i = 0; i < length; i++) {
        // allowedCharacters has an index with the math formula inside it to select a 
        // random index based on the length chosen by user
        // allowedCharacters[47];
        var randomCharacter = allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
        password += randomCharacter;
    }

    return password;

}



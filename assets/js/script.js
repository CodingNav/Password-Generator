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
var lowercaseMessage =  confirm("Do you want to include lowercase letters in your password?");
var uppercaseMessage =  confirm("Do you want to include uppercase letters in your password?");
var numbersMessage =  confirm("Do you want to include numbers in your password?");
var specialMessage =  confirm("Do you want to include special characters in your password?");
var password = "";

for (var i = 0; i < length; i++) {
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    var lowerCharacter = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    password += lowerCharacter;
}

return password;

}

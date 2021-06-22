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


var length = prompt("Enter the length of the password you want.");
var lowercaseLetters =  confirm("Do you want to include lowercase letters in your password?");
var uppercaseLetters =  confirm("Do you want to include uppercase letters in your password?");
var numbers =  confirm("Do you want to include numbers in your password?");
var specialCharacters =  confirm("Do you want to include specialCharacters in your password?");
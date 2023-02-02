// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating the variables characters that will be used to generate password
var passWordLower = ['abcdefghijklmnopqrstuvwxyz'];
var passWordUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var passWordNum = ['0123456789'];
var passWordSpecial = ['!@#$%^&*"()+_-=/?.>,<[]\|{}~`'];
var passWordArray = [];
var passWordLength;
var passWordIndex = ["Lower Case Letters", "Upper Case Letters", "Numbers", "Special Characters"]
var passWordVar = [passWordLower, passWordUpper, passWordNum, passWordSpecial]


// Write password to the #password input
function writePassword() {
  wordLength();

  // Prompt to select the number of characters for the password
  function wordLength() {
    passWordLength = window.prompt("How many charatcers long do you wish to make your new Password (8-128)");
    if (passWordLength <=7 || passWordLength >128) {
      window.alert("The number of characters that you have chosen does not meet the criteria. Please choose a number between 8 and 128!");
      wordLength();
    }
    return
  } 
//  Creating an Array of all eligable characters from the prompts
  for (i=0; i < passWordIndex.length; i++) {
    var answer = window.prompt("Do you want to use " + passWordIndex[i] + " in your Password? Enter Y or N");
    answer = answer.toUpperCase();
    if (answer === "Y") {
      passWordArray = passWordArray + passWordVar[i];
      console.log(passWordArray);
    }
    else {
      answer = window.alert("Your Password is not as strong as it can be if you do not use " +  passWordIndex[i]);
      
    }
  }
  console.log(passWordLength);
  function generatePassword(passwordText) {
    passwordText = "";
    for (i=0; i < passWordLength; i ++) {
      passwordText = passwordText + passWordArray[(Math.floor(Math.random() * passWordArray.length))];
    }
    console.log(passwordText)
    return passwordText
  }
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ## Acceptance Criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
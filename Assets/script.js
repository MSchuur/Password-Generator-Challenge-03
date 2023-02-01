// Assignment Code
var generateBtn = document.querySelector("#generate");
// Creating the variables characters that will be used to generate password
var passWordLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passWordUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passWordNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passWordSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"]
var passWordArray = [];
var passWordLength = 0;

// Write password to the #password input
function writePassword() {
  wordLength();
// Prompt to select the number of characters for the password
  function wordLength() {
    passWordLength = window.prompt("How many charatcers long do you wish to make your new Password (8-129)");
    if (passWordLength <=7 || passWordLength >128) {
      window.alert("The number of characters that you have chosen does not meet the criteria. Please choose a number between 8 and 129!");
      wordLength();
    }
    return
  } 

  // Prompt to ask and confirm if lowercase letters are to be used
  for (x=1; x<2; x++) {
    var lowerCase = window.prompt("Do you want to use lowercase Letters in your Password? Enter Y or N");
      lowerCase = lowerCase.toUpperCase();
      console.log(lowerCase);
      if (lowerCase === "Y") {
        passWordArray.push(passWordLower);
        console.log(passWordArray);
        x = 2;
      }
      else if (lowerCase !== "Y") {
        window.prompt("Are you sure you do not wish to use Lower Case Letters? Enter Y or N");
      }
  }
  
  console.log
  
    
      
  
  
// Prompt to ask and confirm if lowercase letters are to be used
  // var lowerCase = window.prompt("Do you want to use lowercase Letters in your Password? Enter Y or N");
  // lowerCase.toUpperCase
  // if (lowerCase === "Y") {
  //   passWordArray.push(passWordLower);
  //   console.log(passWordArray);
  // }
  
  // else if (lowerCase !== "Y") {
  //   window.prompt("Are you sure You do not wish to use Lower Case Letters? Enter Y or N");
  // }

  console.log(passWordLength);




  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

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
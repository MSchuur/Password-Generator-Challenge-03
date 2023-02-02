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
var passWordVar = [passWordLower, passWordUpper, passWordNum, passWordSpecial];



// Write password to the #password input
function writePassword() {
  passWordLength = 0;
  passWordArray = "";
    
  // Function to create the length of the password
  function wordLength() {
    passWordLength = window.prompt("How many charatcers long do you wish to make your new Password (8-128)");
    if (passWordLength === null) {
      return;
    }  
    else if (passWordLength <=7 || passWordLength >128) {
      window.alert("The number of characters that you have chosen does not meet the criteria. Please choose a number between 8 and 128!");
      wordLength();
    }
    return
  }
  // Calls function to detirmine the length of the password
  wordLength();
    
  //  Function to creating an Array of all eligable characters from the prompts
  function generteCharacters () {
    for (i=0; i < passWordIndex.length; i++) {
      var answer = window.prompt("Do you want to use " + passWordIndex[i] + " in your Password? Enter Y or N");
        if(answer === null) {
          return;
        }
      answer = answer.toUpperCase();
        if (answer === "Y") {
          passWordArray = passWordArray + passWordVar[i];
          console.log(passWordArray);
        }
        else {
          answer = window.alert("Your Password is not as strong as it can be if you do not use " +  passWordIndex[i]);
        }
    }
  }

  // Call function to generates the characters if there is a correct password length
  if (passWordLength>7) {
    generteCharacters();
  }
  
  // Function to generate the random password
  function generatePassword(passwordText) {
    passwordText = "";
    for (i=0; i < passWordLength; i ++) {
      passwordText = passwordText + passWordArray[(Math.floor(Math.random() * passWordArray.length))];
    }
    console.log(passwordText)
    return passwordText
  }

  // Call function to generates password if a character set was been selceted.
  if (passWordArray.length >0) {
    var password = generatePassword();
  }
  else {
    return
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
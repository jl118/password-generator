// assigns the generateBtn variable to the button
var generateBtn = document.querySelector("#generate");

// creates arrays based on ascii character codes
var uppercaseCharCodes = arrayLowToHigh(65, 90);
var lowercaseCharCodes = arrayLowToHigh(97, 122);
var numberCharCodes = arrayLowToHigh(48, 57);
var symbolCharCodes = arrayLowToHigh(35, 47).concat(arrayLowToHigh(58, 64));

// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generates password with the selected parameters
function generatePassword(){
  // prompt for character length
  var characterAmount = prompt("How many characters would you like your password to contain?");

  // prevents user from choosing a number below 8
  while (characterAmount < 8 ) {
    alert("Password length must be at least 8 characters.");
    // allows user to change their answer
    var characterAmount = prompt("How many characters would you like your password to contain?");
  }; 

  // prevents user from choosing a number above 128
  while (characterAmount > 128) {
    alert("Password length must be less than 129 characters.");
    // allows user to change their answer
    var characterAmount = prompt("How many characters would you like your password to contain?");
  }; 

  // gives user the option to include lowercase characters
  var includeLowercase = confirm("Click 'Ok' to include lowercase characters.");

  // gives user the option to include uppercase characters
  var includeUppercase = confirm("Click 'Ok' to include uppercase characters.");

  // gives user the option to include numeric characters
  var includeNumbers = confirm("Click 'Ok' to include numbers.");

  // gives user the option to include special characters
  var includeSymbols = confirm("Click 'Ok' to include special characters.");

  // chooses which arrays to pull from based on user input
  let charCodes = [];
  if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes);
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);

  // stops function if user doesn't choose at least one option
  if (
    includeLowercase === false && 
    includeUppercase === false && 
    includeNumbers === false && 
    includeSymbols === false) {
    alert("Must select at least one criteria");
    return null;
  };

  // creates password text by pushing a string from the randomized charCodes using the length provided
  const passwordText = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordText.push(String.fromCharCode(characterCode));
  }
  return passwordText.join('');
};


// generates character code
function arrayLowToHigh (low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};


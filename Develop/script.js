// Assignment Code
var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLower = 'abcdefghijklmnopqrstuvwxyz';
var randomNumber = '0123456789';
var randomSymbol = '!@#$%^&*()_-=+{}:;?/><,.';



//get user number input for number between 8 and 128
function getLength() {
  //prompt for the input
  var userLength = prompt('Please enter a number between 8 and 128!');

  //parse the string and turn it to an integer
  var parsedNum = parseInt(userLength);

  //if NaN or Num lower than 8 or Num greater than 128, return function
  if (!parsedNum || parsedNum < 8 || parsedNum > 128){
    return getLength();

    //else return the parsednum and store it into variable
  } else {
    return parsedNum;
  }
}
//log to confirm that the code is working as it intended to

charLength = getLength();

//create a function that returns a lowercase letter
var confirmLower = confirm('Do you want lowercase in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');
  if (confirmLower === true) {
    randomLower;
  } else {
    "";
  }
console.log(confirmLower);

//create a function that returns a uppercase letter
var confirmUpper = confirm('Do you want uppercases in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');
  if (confirmUpper === true) {
    randomUpper;
  } else {
    "";
  }
console.log(confirmLower);

//create a function that returns a number
var confirmNumber = confirm('Do you want numbers in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');
  if (confirmNumber === true) {
    randomNumber;
  } else {
    "";
  }
console.log(confirmNumber);

//create a function that returns a symbol
var confirmSymbol = confirm('Do you want symbols in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');
  if (confirmSymbol === true) {
    randomSymbol;
  } else {
    "";
  }
console.log(confirmSymbol);

//create a function that returns password selected characters depending on specific user needs base on true or false statements





charactersType = randomUpper + randomSymbol + randomNumber + randomLower;

console.log(password(charLength, charactersType));




// Write password to the #password input
function password(charLength, characters) {
  var pwd = "";
  var passwordText = document.querySelector("#password");



  for (var i = 0; i<charLength; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return pwd;
  passwordText.value = password(charLength.value, charactersType);

}


// Add an event listener to generate button that generate the printed password onto the passwordText

generateBtn.addEventListener("click", writePassword); {

  var characters = char;
  (confirmLower.checked) ? characters += randomLower : '';
  (confirmSymbol.checked) ? characters += randomSymbol : '';
  (confirmUpper.checked) ? characters += randomUpper : '';
  (confirmNumber.checked) ? characters += randomNumber : '';


  passwordText.value = password(charLength.value, charactersType);

};

generateBtn;



/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/
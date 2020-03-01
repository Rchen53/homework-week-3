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

//store number in a variable
var charLength = getLength();
 
//Store boolean result of lower in a variable
var confirmLower = confirm('Do you want lowercase in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');


 
//Store boolean result of upper in a variable
var confirmUpper = confirm('Do you want uppercases in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');
  
 
//Store boolean result of number in a variable
var confirmNumber = confirm('Do you want numbers in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');



 
//store boolean result of symbol in a variable
var confirmSymbol = confirm('Do you want symbols in your passwords? Press "OK" for "YES" and "Cancel" for "NO!"');



//create a function that generate the character types to be include in generating a random password base on user preference
 
function generateCharactersType() {
  var charactersType = "";
  if (confirmLower === true){
    charactersType = charactersType + randomLower;
  }if (confirmUpper === true){
    charactersType = charactersType + randomUpper;
  }if (confirmNumber === true){
    charactersType = charactersType + randomNumber;
  }if (confirmSymbol === true) {
    charactersType = charactersType + randomSymbol;
  }if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSymbol === false){
    return alert('You must choose at least one character type') + document.location.reload();
  }
  return charactersType;
}

//Store user preference into a variable
var charactersType = generateCharactersType();



//Generate the password base on user input
function generatePassword(charLength, characters) {
  var pwd = "";
  var passwordText = document.querySelector("#password");
 
  for (var i = 0; i < charLength; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(pwd);
  return pwd;
}
 
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword(charLength, charactersType);
  var passwordText = document.querySelector("#password");
 
  passwordText.textContent = password;
 
}
 var generateBtn = document.getElementById('generate');
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());


//reload the page everytime generate password button is clicked
var generateBtnClick = document.getElementById('generate');

generateBtnClick.addEventListener('click', function(){
  if (true){
    return document.location.reload();
  }
})

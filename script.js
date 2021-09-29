//                       STEP 1 :
// prompt bar asking the user to input a character length
// Also convert that number string in to a number type data

const userPasswordLength = function () {
  const characterLength = prompt(
    "Enter the character length the of the password"
  );

  //                       STEP 2 :
  // if statement that validates the user input matches the password length criterial

  if (isNaN(characterLength)) {
    alert("Please type a number");
    return;
  } else {
    const inputNumValue = Number(characterLength); // the input string is converted to a number
    if (inputNumValue < 8 || inputNumValue > 125) {
      alert(
        `Password length is not valid. Pick a length between 8 and 125 and press cancel`
      );
      return;
    } else {
      return inputNumValue;
    }
  }
};

//                       STEP 3 :
//  function for confirm bar for whether the user wants lowercase characters in password

function lowerCaseOption() {
  const option = confirm(
    "Press OK if you want your password to have lowercase characters"
  );
  return option;
}

//                       STEP 4 :
//  function for confirm bar for whether the user wants uppercase characters in password

function upperCaseOption() {
  const option = confirm(
    "Press OK if you want your password to have uppercase characters"
  );
  return option;
}

//                       STEP 5 :
//  function for confirm bar for whether the user wants numbers characters in password

function numericOption() {
  const option = confirm("Press OK if you want your password to have Numbers");
  return option;
}

//                       STEP 6 :
//  function for confirm bar for whether the user wants special characters in password
function specialCharacterOption() {
  const option = confirm(
    "Press OK if you want your password to have special characters"
  );
  return option;
}

//                       STEP 7 :
//  declare a list of lowercase , uppercase , numbers and special characters in a string
// convert the string into an array

//                       STEP 8  :
const passwordLength = userPasswordLength();

const inputLowerCase = lowerCaseOption();

const inputUpperCase = upperCaseOption();

const inputNumericValue = numericOption();

const inputSpecialCharacter = specialCharacterOption();

console.log(
  passwordLength,
  inputLowerCase,
  inputUpperCase,
  inputNumericValue,
  inputSpecialCharacter
);

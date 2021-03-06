// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE

  //                       STEP 1 :
  // prompt bar asking the user to input a character length
  // Also convert that number string in to a number type data

  const userPasswordLength = function () {
    // declare an is valid booleon

    const characterLength = prompt(
      "Enter the character length the of your password"
    );

    //                       STEP 2 :
    // if statement that validates the user input matches the password length criterial

    if (isNaN(characterLength)) {
      alert("Please type a number");
      return;
    } else {
      const inputNumValue = Number(characterLength); // the input string is converted to a number
      if (inputNumValue < 8 || inputNumValue > 128) {
        alert(
          "Password length is not valid. Pick a length between 8 and 128 and press cancel"
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
    const option = confirm(
      "Press OK if you want your password to have Numbers"
    );
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
  //  in a function declare a list of lowercase , uppercase , numbers and special characters in a string
  // convert the string into an array and then generate a random

  function randomLowerCaseCharacter() {
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const lowerCaseArray = lowerCaseCharacters.split("");
    const generateRandomLowerCC =
      lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    return generateRandomLowerCC;
  }

  function randomUppercaseCharacter() {
    const upperCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseArray = upperCaseCharacters.toUpperCase().split("");
    const generateRandomUpperCC =
      upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    return generateRandomUpperCC;
  }

  function randomNumericalValue() {
    const numericalValue = "0123456789";
    const numericalArray = numericalValue.split("");
    const generateRandomNumericalValue =
      numericalArray[Math.floor(Math.random() * numericalArray.length)];
    return generateRandomNumericalValue;
  }

  function randomSpecialCharacter() {
    const specialCharacters = "@|!#$%&/()=?????@???????{}.-;<>_,";
    const specialCharactersArray = specialCharacters.split("");
    const generateRandomSpecialCharacter =
      specialCharactersArray[
        Math.floor(Math.random() * specialCharactersArray.length)
      ];
    return generateRandomSpecialCharacter;
  }

  //                       STEP 8  :
  // store the above functions in a variable

  const passwordLength = userPasswordLength();

  const inputLowerCase = lowerCaseOption();

  const inputUpperCase = upperCaseOption();

  const inputNumericValue = numericOption();

  const inputSpecialCharacter = specialCharacterOption();

  //                       STEP 9  :

  function generatingUserPassword() {
    let randomGeneratedPassword = [];

    while (passwordLength > randomGeneratedPassword.length) {
      if (
        inputLowerCase === false &&
        inputUpperCase === false &&
        inputNumericValue === false &&
        inputSpecialCharacter === false
      ) {
        alert(
          "Please pick one of the choice 1 type of character format for your password"
        );
        break;
      }
      if (inputLowerCase) {
        randomGeneratedPassword.push(randomLowerCaseCharacter());
      }

      if (inputUpperCase) {
        randomGeneratedPassword.push(randomUppercaseCharacter());
      }

      if (inputNumericValue) {
        randomGeneratedPassword.push(randomNumericalValue());
      }

      if (inputSpecialCharacter) {
        randomGeneratedPassword.push(randomSpecialCharacter());
      }
    }

    while (randomGeneratedPassword.length - passwordLength > 0) {
      randomGeneratedPassword.pop();
    }

    randomGeneratedPassword = randomGeneratedPassword.sort(
      () => Math.random() - 0.5
    );

    randomGeneratedPassword = randomGeneratedPassword.join("");

    return randomGeneratedPassword;
  }
  return generatingUserPassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

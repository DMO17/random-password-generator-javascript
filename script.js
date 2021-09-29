//                       STEP 1 :
// prompt bar asking the user to input a character length
// Also convert that number string in to a number type data

const userPasswordLength = function () {
  const characterLength = prompt(
    `Enter the character length the of the password `,
    `Enter Here`
  );
  const inputNumValue = Number(characterLength); // the input string is converted to a number

  //                       STEP 2 :
  // if statement that validates the user input matches the password length criterial

  if (inputNumValue < 8 || inputNumValue > 125) {
    return alert(
      `Password length is not valid. Pick a length between 8 and 125 and press cancel`
    );
  } else return inputNumValue;
};

console.log(userPasswordLength());
//                       STEP 3 :
//  function for confirm bar for whether the user wants lowercase characters in password

function lowerCaseOption() {
  const option = confirm(
    "Press OK if you want your password to have lowercase characters"
  );
  if (option === true) return `chose lowercase characters`;
  else return `dont want any lower case charaters`;
}
console.log(lowerCaseOption());

//                       STEP 4 :
//  function for confirm bar for whether the user wants uppercase characters in password

function upperCaseOption() {
  const option = confirm(
    "Press OK if you want your password to have uppercase characters"
  );
  if (option === true) return `chose uppercase characters`;
  else return `dont want any uppercase charaters`;
}
console.log(upperCaseOption());

//                       STEP 5 :
//  function for confirm bar for whether the user wants numbers characters in password

function numericOption() {
  const option = confirm("Press OK if you want your password to have Numbers");
  if (option === true) return `chose numbers`;
  else return `dont want any number charaters`;
}
console.log(numericOption());

//                       STEP 6 :
//  function for confirm bar for whether the user wants special characters in password
function specialCharacOption() {
  const option = confirm(
    "Press OK if you want your password to have special characters"
  );
  if (option === true) return `chose special characters`;
  else return `dont want any special charaters`;
}
console.log(specialCharacOption());

//                       STEP 7 :
//  declare a list of lowercase , uppercase , numbers and special characters in a string
// convert the string into an array

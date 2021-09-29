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
  // function that validates the user input matches the password length criterial
  // function passwordLengthCriteria() {
  //   if (userPasswordLength() < 8 && userPasswordLength() > 125) {
  //     alert(`Password length is not valid. Pick a length between 8 and 125`);
  //   }
  // }

  if (inputNumValue < 8 || inputNumValue > 125) {
    return alert(
      `Password length is not valid. Pick a length between 8 and 125`
    );
  } else return inputNumValue;
};

console.log(userPasswordLength());

//                       STEP 3 :
//  function for confirm bar for whether the user wants lowercase characters in password

//                       STEP 4 :
//  function for confirm bar for whether the user wants uppercase characters in password

//                       STEP 5 :
//  function for confirm bar for whether the user wants numbers characters in password

//                       STEP 6 :
//  function for confirm bar for whether the user wants special characters in password

//                       STEP 7 :
//  declare a list of lowercase , uppercase , numbers and special characters in a string
// convert the string into an array

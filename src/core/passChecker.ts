/**
 * Check in the provided password is valid or not
 *
 * @param password a string representing the user password
 * @returns a boolean indicating the validity
 * */
function checkValidation(password: string): boolean {
  if (password.includes(" ") || password.length < 1) {
    return false;
  } else {
    return true;
  }
}

/**
 * Check the length of the password and returns a rating
 * according to security password rules.
 *
 * @param password a string representing the user password
 * @returns a number to represent the password length validity
 * */
function rateLength(password: string): number {
  let rating = 0;

  if (password.length >= 8) {
    rating += 5;
  }

  if (password.length >= 12) {
    rating += 10;
  }

  return rating;
}

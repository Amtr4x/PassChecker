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

/**
 * Rate the amount of uppercase characters found
 * in the password.
 *
 * @param password a string representing the user password
 * @returns a number to represent the upper casing rating
 * */
function rateUpperCasing(password: string): number {
  let rating = 0;
  const regex: RegExp = /[A-Z]/g;
  const uppersAmount = password.match(regex)?.length ?? 0;

  if (uppersAmount === 1) {
    rating += 5;
  }

  if (uppersAmount > 1) {
    rating += 10;
  }

  return rating;
}

/**
 * Rate the amount of numbers included in the password.
 *
 * @param password a string representing the user password
 * @returns a number to represent the numbers inclusion in the password
 * */
function rateNumbersInclusion(password: string): number {
  let rating = 0;
  const regex: RegExp = /[0-9]/g;
  const numbersAmount = password.match(regex)?.length ?? 0;

  if (numbersAmount === 1) {
    rating += 5;
  }

  if (numbersAmount > 1) {
    rating += 10;
  }

  return rating;
}

/**
 * Rate the amount of special characters included in the password.
 *
 * @param password a string representing the user password
 * @returns a number to represent the special characters amount in the password
 * */
function rateSpecialCharacters(password: string): number {
  let rating = 0;
  const regex: RegExp = /[^\d\w\s]/g;
  console.log(password.match(regex));
  const specialCharsAmount = password.match(regex)?.length ?? 0;

  if (specialCharsAmount === 1) {
    rating += 5;
  }

  if (specialCharsAmount > 1) {
    rating += 10;
  }

  return rating;
}

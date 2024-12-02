import { Rate } from "./Rate";

/**
 * Rate the password provided according to the standard password
 * security measures.
 *
 * @param password a string representing the user password.
 * @returns a Rate object to represent the security level.
 * */
export function ratePassword(password: string): Rate {
  if (checkValidation(password)) {
    const passwordRating: number = [
      rateLength(password).valueOf(),
      rateUpperCasing(password).valueOf(),
      rateNumbersInclusion(password).valueOf(),
      rateSpecialCharacters(password.valueOf()),
    ].reduce((x: number, y: number): number => x + y);

    if (passwordRating < 40) {
      return Rate.WEAK;
    } else if (passwordRating >= 40 && passwordRating <= 59) {
      return Rate.MEDIUM;
    } else if (passwordRating >= 60 && passwordRating <= 89) {
      return Rate.GOOD;
    } else if (passwordRating >= 90) {
      return Rate.SECURE;
    }
  }

  return Rate.INVALID;
}
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
    rating += 10;
  }

  if (password.length >= 12) {
    rating += 20;
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

  if (uppersAmount > 0) {
    rating += 10;
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

  if (numbersAmount > 0) {
    rating += 10;
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

  if (specialCharsAmount > 0) {
    rating += 10;
  }

  if (specialCharsAmount > 1) {
    rating += 20;
  }

  return rating;
}

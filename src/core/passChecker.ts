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

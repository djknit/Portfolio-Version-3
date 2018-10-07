// Function to check if email address appears valid
function isEmail(email) {
    const atIndex = email.indexOf("@");
    const firstDotIndex = email.indexOf(".");
    // If the user inputted email does not contain '@'...
    if (atIndex === -1) {
        // Input is not a valid email address.
        return false;
    }
    // If the input contains multiple instances of '@'...
    else if (email.substring(atIndex + 1).indexOf("@") > -1) {
        // Input is invalid.
        return false;
    }
    // If the first letter of the input is not a letter...
    else if (email[0].toLowerCase() === email[0].toUpperCase()) {
        // Input is invalid.
        return false;
    }
    // If the input does not contain at least 1 '.', the first of which does not come before "@" or directly after "@"...
    else if (firstDotIndex < atIndex + 2) {
        // Input is invalid.
        return false;
    }
    // If the input contains two '.'s in a row, or the last character is '.'...
    else if (email.indexOf("..") > -1 || email[email.length - 1] === ".") {
        // Input is invalid.
        return false;
    }
    // If the input did not fail any of the above tests...
    else {
        // The input has the structure of a valid email adress.
        return true;
    }
}
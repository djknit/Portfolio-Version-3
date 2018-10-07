// When the contact form is submitted...
document.getElementById("contact-submit").addEventListener("click", function(event) {
    console.log("form submit")
    // Prevent the page from reloading
    event.preventDefault();
    
    // Grab the input form values
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    
    // Create a variable to reference the form message area
    var formMessage = document.getElementById("form-message");
    
    // If any of the fields were left empty...
    if (userData.name === "" || userData.email === "" || userData.message === "") {
        // Alert user of issue.
        formMessage.textContent = "All fields must be filled out before the form can be submitted.";
    }
    // If the email does not have the structure of a valid email...
    else if (!isEmail(userData.email)) {
        // Alert user of issue.
        formMessage.textContent = "The email address you entered does not appear to be a valid address.";
    }
    // If the user input passes the above checks...
    else {
        // Add the user data to the firebase database.
        writeToDatabase(userData);
        // Alert user that there data was submitted.
        formMessage.textContent = `Thank you ${userData.name}! Your message was submitted.`;
        // Clear the form.
        document.getElementById("contact-form").reset();
    }
});
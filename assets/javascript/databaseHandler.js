// Initialize Firebase
var config = {
    apiKey: "AIzaSyBf-qM2GWdtNzrQ0zQsGOtVnXRxr4yyRGQ",
    authDomain: "portfolio-d9b6a.firebaseapp.com",
    databaseURL: "https://portfolio-d9b6a.firebaseio.com",
    projectId: "portfolio-d9b6a",
    storageBucket: "portfolio-d9b6a.appspot.com",
    messagingSenderId: "987488041237"
};
firebase.initializeApp(config);

const database = firebase.database();

// Function to write data to the database
function writeToDatabase(dataObject) {
    database.ref().push(dataObject);
}
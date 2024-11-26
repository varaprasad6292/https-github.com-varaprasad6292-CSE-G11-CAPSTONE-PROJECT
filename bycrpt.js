const bcrypt = window.bcrypt;

const password = "userPassword123";

// Hash password
bcrypt.hash(password, 10, function(err, hashedPassword) {
    if (err) {
        console.log(err);
    } else {
        console.log("Hashed Password: ", hashedPassword);
    }
});

const plainPassword = "userPassword123";
const hashedPassword = "$2a$10$JjHg9Gzq5d9GJrh3mOZs/eiDs5aPz9hcxB45U2aV9fFZHLrkHfLuO";  // example hashed password

bcrypt.compare(plainPassword, hashedPassword, function(err, result) {
    if (err) {
        console.log(err);
    } else if (result) {
        console.log("Passwords match!");
    } else {
        console.log("Passwords do not match.");
    }
});

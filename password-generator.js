// Import the generate-password package
const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
    // Configuration for password generation
    const passwordOptions = {
        length: 12,
        numbers: true, 
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true, 
    };

    
    const password = generatePassword.generate(passwordOptions);

    console.log("Generated Password:", password);
}


generateRandomPassword();

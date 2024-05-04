// Importing the nodemailer package
const nodemailer = require('nodemailer');

// Creating a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', 
        pass: '' 
        
    }
});

// Email content
let mailOptions = {
    from: '',
    to: '', 
    subject: 'Test Email', 
    text: 'This is a test email sent using Node.js and nodemailer.' 
};

// Sending email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});

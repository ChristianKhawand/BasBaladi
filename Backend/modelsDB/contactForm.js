const mongoose = require('mongoose');

const FormSchema = mongoose.Schema(
    {
        fullName: { 
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            // You might want to add validation for phone numbers here
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'contactForm'
    }
);

const contactForm = mongoose.model('contactForm', FormSchema);

module.exports = contactForm;

const mongoose = require('mongoose');

const ClientsSchema = mongoose.Schema(
    {
        uniqueId: {
            type: Number,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
       
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        }
        
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'Clients'
    }
);

const Clients = mongoose.model('Clients', ClientsSchema);
module.exports = Clients;

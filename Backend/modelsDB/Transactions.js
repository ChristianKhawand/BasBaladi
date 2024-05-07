const mongoose = require('mongoose');

const TransactionsSchema = mongoose.Schema(
    {
        clientId: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
        
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'Transactions'
    }
);

const Transactions = mongoose.model('Transactions', TransactionsSchema);
module.exports = Transactions;

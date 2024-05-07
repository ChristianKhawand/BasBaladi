const mongoose = require('mongoose');

const OrdersSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true,
        },
        clientId: {
            type: Number,
            required: true,
        },
        productId: {
            type: Number,
            required: true
        }
        
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'Orders'
    }
);

const Orders = mongoose.model('Orders', OrdersSchema);
module.exports = Orders;

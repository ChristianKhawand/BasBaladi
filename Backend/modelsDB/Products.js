const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        uniqueId: {
            type: Number,
            required: true
        },
        productCategory: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        provider: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'Products'
    }
);

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;

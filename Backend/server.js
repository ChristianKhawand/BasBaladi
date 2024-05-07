const express = require('express');
const mongoose = require('mongoose');
const Clients = require('./modelsDB/Clients'); 
const Products = require('./modelsDB/Products');
const Orders = require('./modelsDB/Orders');
const Transactions = require('./modelsDB/Transactions');
const contactForm = require('./modelsDB/contactForm');
const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express();
const PORT = 3000;



//middleware
app.use(express.json());  
app.use(cors())




// Connect to MongoDB
mongoose.connect('mongodb+srv://christianskhawand:123@cluster0.7lld3uh.mongodb.net/Groceries')
.then(() => 
    console.log('Connected to MongoDB'))

    .catch(() => 
        console.log('Failed to connect MongoDB'))
        



        

// GET method to retrieve all clients

app.get('/api/clients', async (req, res) => {
    try {
        const clients = await Clients.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Register new user

app.post('/api/clients', async (req, res) => {
    try {
        // Check if all required fields are present
        const { firstName, lastName, phoneNumber, email, password } = req.body;
        if (!firstName || !lastName || !phoneNumber || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if email already exists in the database
        const existingClient = await Clients.findOne({ email: email });
        if (existingClient) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // If email is unique and all fields are filled, proceed with creating a new client
        const lastClient = await Clients.findOne().sort({ uniqueId: -1 });
        const nextClientId = lastClient ? lastClient.uniqueId + 1 : 1;

        const client = new Clients({
            uniqueId: nextClientId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password
        });

        const newClient = await client.save(); // Save the new client
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Post Login Client to web

app.post("/api/login" , (req, res) => {
    const {email, password} = req.body;
    Clients.findOne({email: email})
    .then(user => {
         if(user){
             if(user.password === password){
                res.json(user.uniqueId)
             } else {
                res.json("the password is incorrect")
             } 
            } else { 
                res.json("the email is incorrect")
            }
    })
})


// Get All products from the table Products

app.get('/api/products', async (req, res) => {
    try {
        /* const start = parseInt(req.query.start) || 0;
        const end = parseInt(req.query.end) || 8;
        const products = await Products.find().skip(start).limit(end - start); */
        const products = await Products.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




// Fill the contactForm Table in the database

app.post('/api/contact', async (req, res) => {
    const {fullName ,email ,phoneNumber , message} = req.body;
    const form = contactForm({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    });

    try {
        const newContactForm = await form.save(); 
        res.status(201).json(newContactForm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// Add order given client id and product id
app.post('/api/add-order', async (req, res) => {
    const { productName, productPrice, clientId, productId } = req.body;
    
    try {
        // Find the order based on the provided criteria
        let order = await Orders.findOne({
            productName,
            productPrice,
            clientId,
            productId
        });
        
        if (!order) {
            // If the order doesn't exist, create a new one with quantity 1
            order = new Orders({
                productName,
                productPrice,
                productQuantity: 1,
                clientId,
                productId
            });
        } else {
            // If the order exists, increment the quantity by 1
            order.productQuantity += 1;
        }
        
        // Save the order
        await order.save();
        
        res.json("Success");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Get Products in shopping cart from orders given the client
app.get('/api/get-orders', async (req, res) => {
    try {
        const clientId = req.query.clientId;
        const orders = await Orders.find({ clientId: clientId });
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to get orders' });
    }
});


// Add/Remove quantity in product
app.put('/api/update-order', async (req, res) => {
    try {
        const { productName, productPrice, clientId, productId, inc } = req.query;

        const parsedClientId = parseInt(clientId);
        const parsedProductId = parseInt(productId);
        const parsedInc = parseInt(inc);

        let order;

        if (parsedInc === 1) {
            order = await Orders.findOneAndUpdate(
                { clientId: parsedClientId, productId: parsedProductId },
                { $inc: { productQuantity: 1 } },
                { new: true, upsert: true }
            );
        } else if (parsedInc === -1) {
            order = await Orders.findOneAndUpdate(
                { clientId: parsedClientId, productId: parsedProductId, productQuantity: { $gt: 0 } },
                { $inc: { productQuantity: -1 } },
                { new: true }
            );

            if (order && order.productQuantity === 0) {
                await Orders.deleteOne({ clientId: parsedClientId, productId: parsedProductId });
            }
        } else {
            throw new Error('Invalid inc value. Must be 1 or -1.');
        }

        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update order' });
    }
});

// Delete all orders related to the client ID
app.delete('/api/delete-order', async (req, res) => {
  try {
    const clientId = req.query.clientId;
    await Orders.deleteMany({ clientId: clientId });
    res.status(200).send('Orders deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete orders' });
  }
});

// Add a transaction
app.post('/api/add-transaction', async (req, res) => {
    try {
      const { clientId, total } = req.body;
      
      const transaction = new Transactions({
        clientId: clientId,
        amount: total
      });
  
      await transaction.save();
  
      res.status(200).send('Transaction added successfully');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to add transaction' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

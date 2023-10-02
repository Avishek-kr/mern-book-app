const dotenv = require('dotenv');
const cors = require('cors');
const express = require("express");

const connectDB = require('./connectDB');
const Book = require('./models/Book')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// creating a route
app.get('/api/book', async (req, res) => {
    try {
        const data = await Book.find();
        res.json(data);
    } catch (error) {
        res.sendStatus(500).json({ error: 'An error occured whilee fetching books.' })
    }
})

// home route
app.get('/', (req, res) => {
    res.json('Hello There');
});

// throw error for other routes
app.get('*', (req, res) => {
    res.sendStatus('404');
});


// up running the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})
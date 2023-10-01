const dotenv = require('dotenv');
const cors = require('cors');
const express = require("express");

const connectDB = require('./connectDB');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
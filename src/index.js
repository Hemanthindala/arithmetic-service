require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const {add} = require('./arithmetica')
app.use(cors());

if (!process.env.PORT){
    throw new Error('Please specify the port number for the HTTP server with the environment variable PORT.');
}

const port= process.env.PORT;
// Define a route with parameters in the URL path
app.get('/add/:num1/:num2', (req, res) => {
    // Extracting two input parameters from the URL path
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    // Checking if both parameters are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculating the sum
        let sum = add(num1,num2);
            res.json(sum);
    } else {
        res.status(400).send('Invalid input. Please provide valid numbers.');
    }
});

app.get('/', (req, res) => {
    res.send('Arithmetic Service - last updated 3/4/2024')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

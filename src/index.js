const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Define a route with parameters in the URL path
app.get('/add/:num1/:num2', (req, res) => {
    // Extracting two input parameters from the URL path
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    // Checking if both parameters are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculating the sum
        const sum = num1 + num2;
        res.send({result: sum});
    } else {
        res.status(400).send('Invalid input. Please provide valid numbers.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

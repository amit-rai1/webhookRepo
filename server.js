const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    const jsonData = req.body;
    console.log('Received JSON data:', JSON.stringify(jsonData, null, 2));
    
    // Do something with the received data
    // For example, save to a database or trigger another process

    // Respond to the sender with the received data
    res.status(200).json({
        message: 'Webhook received',
        data: jsonData
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

var path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(morgan('short')); 
app.use(express.static('dist'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(cors());

console.log(__dirname)
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
  })

// API fetch data received from the client is saved in an array named saved Data
const savedData = [];

// **** START OF ROUTES ****

// Check whether routes are working in general
app.get('/test', (req, res) => {
    /* res.send(process.env.api); */
    res.send(savedData);
});

// POST request for saving received client data into array named inputData
app.post('/save', (req, res) => { 
    if (req.body != 0) {
        const result = req.body;
        savedData[0] = result;
        res.send('Your trip has been saved')
    } else {
        console.log('Could not save data');
        res.send('Something went wrong. Could not save the data...');
    } 
});

// Remove data from inputData array
app.post('/remove', (req, res) => {
        // Delete element in savedData array
        savedData.shift();
        res.send('Your trip has been saved')
    
    console.log('Data entry has been removed')
});

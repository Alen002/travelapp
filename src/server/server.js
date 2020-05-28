var path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use(express.json());
app.use(cors());

app.use(morgan('short'));  // short or combines can be used as attributes

// Middleware
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

// Check whether routes are working in general
app.get('/test', (req, res) => {
    res.send('This is the test route');
});



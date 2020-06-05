const dotenv = require('dotenv')
dotenv.config();

var path = require('path')
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(morgan('short'));  // short or combines can be used as attributes
app.use(express.static('dist'));

// middleware - body-parser
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

console.log(__dirname)
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
  })

// Check whether routes are working in general
app.get('/test', (req, res) => {
    res.send(process.env.api);
});

// The POST request for Geonames API
app.post('/api', (req, res) => {  
      req.body, // json file is received as {"text": "Your text"} -> testing via postman
      function(error, response) {
        if (error === null) {
          res.send(response); // response is the output data of the API 
          console.log(response); // Display the response on the server
        } else console.log('API is not working');
      };
  });

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

var path = require('path')

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/*Dependencies*/
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 3000;

const server = app.listen(port, listening);
// Callback to debug
function listening() {
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
}

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})
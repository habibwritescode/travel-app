const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const requestHandler = require('./requestHandler');


// Start up an instance of app
const app = express();

// Cors for cross origin allowance
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
// Callback to debug
function listening() {
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
}


app.post('/getCoordinates', requestHandler.getCoordinates);
app.post('/getWeather', requestHandler.getWeather)
app.post('/getImage', requestHandler.getImage)
app.post('/getCountryDetail', requestHandler.getCountryDetail)
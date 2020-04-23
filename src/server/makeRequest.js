const fetch = require("node-fetch");


async function getCoordinates(req, res) {
    // Fetch data from Geonames API
    const username = process.env.GEONAMES_USERNAME
    let url = `http://api.geonames.org/searchJSON?q=${req.body.destination}&maxRows=1&username=${username}`;
    const response = await fetch(url)

    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log({ "error": error });
    }
};

async function getWeather(req, res) {
    // Fetch data from the Weatherbits API
    const apiKey = process.env.WEATHERDOTIO_API_KEY
    let url = `https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${apiKey}`;
    const response = await fetch(url)

    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

async function getImage(req, res) {
    const city = req.body.destination.replace(/\s/g, '+');
    const apiKey = process.env.PIXABAY_API_KEY

    // Fetch data from Pixabay API using the destination value
    let url = `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo`;
    let response = await fetch(url);
    try {
        let data = await response.json();
        if (data.totalHits > 0) {
            res.send(data);
        } else {
            // Fetch country data if destination is an obscure place
            const country = req.body.country.replace(/\s/g, '+');
            let url = `https://pixabay.com/api/?key=${apiKey}&q=${country}&image_type=photo`;
            let response = await fetch(url);
            try {
                let data = await response.json();
                if (data.totalHits > 0) {
                    res.send(data);
                } else {
                    res.send({ "use_placeholder": true })
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function getCountryDetail(req, res) {
    let url = `https://restcountries.eu/rest/v2/name/${req.body.countryCode}?fullText=true`;
    const response = await fetch(url);

    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}



exports.getCoordinates = getCoordinates;
exports.getWeather = getWeather;
exports.getImage = getImage;
exports.getCountryDetail = getCountryDetail;
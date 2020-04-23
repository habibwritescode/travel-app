import { numberOfDaysBeforeTrip, numberOfDaysForTrip } from "./helperFunctions";


export const dataFromApi = async function(trip) {
    await Promise.all([
        (async() => {
            // Get coordinates of destination
            let coordinates = await fetch("http://localhost:3000/getCoordinates", {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "destination": trip.destination })
            })
            try {
                let data = await coordinates.json();

                trip.destinationCode = data.geonames[0].countryCode;
                trip.longitude = data.geonames[0].lng;
                trip.latitude = data.geonames[0].lat;
                trip.countryName = data.geonames[0].countryName;
            } catch (error) {
                console.log(error);
            }

            // Get weather details of destination 
            let weatherData = await fetch("http://localhost:3000/getWeather", {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'longitude': trip.longitude,
                    'latitude': trip.latitude
                })
            })
            try {
                let data = await weatherData.json();
                trip.temperature = data.data[0].temp;
                trip.weather = data.data[0].weather.description;
            } catch (error) {
                console.log(error);
            }


            // Get image of destination 
            let image = await fetch("http://localhost:3000/getImage", {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'destination': trip.destination,
                    'country': trip.countryName
                })
            })
            try {
                let data = await image.json();
                if (data.use_placeholder) {
                    trip.imageUrl = '../media/placeholder.jpg'
                } else {
                    trip.imageUrl = data.hits[0].largeImageURL;
                }
            } catch (error) {
                console.log(error);
            }


            // Get country information about destination
            let details = await fetch("http://localhost:3000/getCountryDetail", {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'countryCode': trip.destinationCode
                })
            })
            try {
                let data = await details.json();
                trip.languages = data[0].languages[0].name;
                trip.population = data[0].population;
                trip.currencyName = data[0].currencies[0].name;
            } catch (error) {
                console.log(error);
            }

            numberOfDaysBeforeTrip(trip);
            numberOfDaysForTrip(trip);
        })()
    ])


    return trip;
}
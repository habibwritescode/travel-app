import { capitalCase, scrollResults } from "./helperFunctions";

export const updateUI = function(tripObject) {
    const resultSection = document.getElementById('entry');

    let tripDetails = document.createElement('div');
    tripDetails.setAttribute('id', 'entry-holder');
    tripDetails.innerHTML = `
        <img src=${tripObject.imageUrl} alt=${tripObject.destination}>
        <div class="add-margin">
        <h3 class="title">Trip Details</h3>
        <p>Trip duration: ${tripObject.departureDate} to ${tripObject.arrivalDate}</p>
        <p>Length of trip: ${tripObject.daysOfTrip} day(s)</p>
        <p>Number of days till trip: ${tripObject.daysToGo} day(s)</p>
    <h3 class="title">Weather</h3>
      <p>Temperature: ${tripObject.temperature}°C</p>
      <p>Details: ${capitalCase(tripObject.weather)}</p>
    <h3 class="title">Destination details</h3>
      <p>Country: ${capitalCase(tripObject.countryName)}</p>
      <p>Primary language: ${tripObject.languages}</p>
      <p>Currency: ${tripObject.currencyName}</p>
      <p>Population: ${tripObject.population}</p>
        </div>
    `
    scrollResults()
    resultSection.appendChild(tripDetails);
}
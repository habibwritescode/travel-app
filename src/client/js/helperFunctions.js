const moment = require('moment');

export const numberOfDaysBeforeTrip = function(trip) {
    // Value of One day Time in milliseconds 
    const oneDay = 1000 * 60 * 60 * 24

    const presentDate = new Date()
    const departureDate = new Date(trip.departureDate)
        // To Calculate the result in milliseconds and then converting into days 
    const days = Math.round(departureDate.getTime() - presentDate.getTime()) / (oneDay);
    // Remove decimals from days value
    const daysToGo = days.toFixed(0);
    trip.daysToGo = daysToGo;
    return trip
}

export const numberOfDaysForTrip = function(trip) {

    const newDepartureDate = new Date(trip.departureDate);
    const newReturnDate = new Date(trip.arrivalDate);
    // Calculate the time difference between the two dates
    const differenceTime = newReturnDate.getTime() - newDepartureDate.getTime();
    // Calculate the number of days between the two dates by dividing by the number of milliseconds in one day
    const daysOfTrip = differenceTime / (1000 * 3600 * 24);
    trip.daysOfTrip = daysOfTrip
    return trip;
}

export const capitalCase = (word) => {
    if (typeof word !== 'string') return '';
    return word[0].toUpperCase() + word.slice(1);
}

// Format date e.g 2020-04-23 to April 23, 2020
export const formatDate = function(date) {
    const formatedDate = moment(date).format('LL');
    return formatedDate
}
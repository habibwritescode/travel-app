import { formatDate } from './helperFunctions';

export const getFormDetails = function() {

    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departure-date');
    const arrivalDate = document.getElementById('arrival-date');

    const formatDepartureDate = formatDate(departureDate.value);
    const formatReturnDate = formatDate(arrivalDate.value);

    return {
        destination: destination.value,
        departureDate: formatDepartureDate,
        arrivalDate: formatReturnDate
    }
}
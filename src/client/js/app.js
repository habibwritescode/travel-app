import { dataFromApi } from './apiData';
import { getFormDetails } from './formValidation';
import { updateUI } from './updateUI';

export const mainFunction = function() {

    const submitButton = document.getElementById('generate');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const tripDetails = getFormDetails();

        dataFromApi(tripDetails)
            .then(data => {
                updateUI(data);
            })
    })
}
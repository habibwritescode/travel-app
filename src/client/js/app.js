/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const mainFunc = function() {


    const submitBtn = document.getElementById('generate');
    submitBtn.addEventListener('click', performAction);
    /* Function called by event listener */
    function performAction(evt) {
        evt.preventDefault();
    }
}



export { mainFunc }
// Import main Js Funtion
import { mainFunction } from './js/app';

import './styles/mainStyle.scss';
import './styles/results.scss';
import './styles/footer.scss';
import './styles/form.scss';

import './media/placeholder.jpg'

export {
    mainFunction
}

window.addEventListener("DOMContentLoaded", mainFunction);
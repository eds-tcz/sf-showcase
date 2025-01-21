// main.js or index.js
import { initGTM, pushToDataLayer } from './gtm.js';

// Initialize GTM with your container ID
const GTM_ID = 'GTM-XXXX'; // Replace with your GTM ID
initGTM(GTM_ID);

// Example of pushing data to dataLayer
pushToDataLayer({
    'event': 'pageView',
    'pageName': 'Home'
});
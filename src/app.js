// App Entry Point ----------------------------------------

import * as Map from './map';

// Import css/html for hot reloading
// TODO - Does this need to be done in js? Should it be constrained to dev only?
import './style.css';
import '../index.html'

// Set our GoogleMaps API callback function to initMap()
window.initMap = Map.initMap;

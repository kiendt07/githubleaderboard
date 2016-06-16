import 'core-js/fn/object/assign'

import ReactDOM from 'react-dom'

var routes = require('./routes/routes');

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById('app'));

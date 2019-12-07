import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.jsx';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Favicon from 'react-favicon';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import favicon from './assets/images/favicon.ico';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Favicon url={favicon} />
        <App />
    </Router>
    ,
    document.getElementById('root'));
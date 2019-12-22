import React from 'react';
import { render } from 'react-dom';
import App from './routes/App.jsx';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/index";
import thunk from 'redux-thunk';
import Favicon from 'react-favicon';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import favicon from './assets/images/favicon.ico';
import { fetchProducts, fetchCategories } from './containers/products.js';

let store = createStore(productsReducer, applyMiddleware(thunk));

store.dispatch(fetchProducts()).then(() => {
    console.log(store.getState());
})

store.dispatch(fetchCategories()).then(() => {
    console.log(store.getState());
})


render(

    <>
        <Favicon url={favicon} />
        <Provider store={store}>
            <App />
        </Provider>
    </>
    ,
    document.getElementById('root'));
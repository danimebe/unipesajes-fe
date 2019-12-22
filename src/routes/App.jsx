import React, { useRef } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Contact from '../components/Contact';
import ProductsView from '../containers/ProductsView';

const App = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/home">
                <Layout>
                    <Home/>
                </Layout>
            </Route>
            <Route exact path="/contact">
                <Layout>
                    <Contact />
                </Layout>
            </Route>
            <Route exact path="/products">
                <Layout>
                    <ProductsView />
                </Layout>
            </Route>
            <Route exact path="/admin" component={Admin} />
            <Redirect from="/" to="home" />
        </Switch>
    </BrowserRouter>
}



export default App;
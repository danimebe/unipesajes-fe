import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Contact from '../components/Contact';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home">
                <Layout>
                    <Home />
                </Layout>
            </Route>
            <Route exact path="/contact">
                <Layout>
                    <Contact />
                </Layout>
            </Route>
            <Route exact path="/admin" component={Admin} />
            <Redirect from="/" to="home" />
        </Switch>
    </BrowserRouter>
)

export default App;
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ProductsView from '../containers/ProductsView';

const Home = () => {
    return <>
        <Hero id="Hero" />
        <Services id="Services" />
        <ProductsView />
    </>
}

export default Home;
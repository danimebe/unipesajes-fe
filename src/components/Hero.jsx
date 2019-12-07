import React from 'react';

import background1 from '../assets/images/background.jpg';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.png';

import '../assets/styles/Hero.scss';

const Hero = () => (
    <section className="main">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={background1} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={background2} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={background3} className="d-block w-100" />
                </div>
            </div>
        </div>
        <div className="overlay">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 offset-md-1 text-md-center text-center d-flex flex-column justify-content-around">
                        <div>
                            <img src="./src/assets/images/favicon.ico" className="d-inline-block" height="90" alt="" />
                            <h1 className="d-inline-block">Unipesajes</h1>
                            <h3>Básculas, balanzas y equipos de alimentación</h3>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="btn btn-outline-light"> Conócenos</a>
                            <button type="button" className="btn btn-light" data-toggle="modal" data-target="#modal-compra">Ver productos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero;
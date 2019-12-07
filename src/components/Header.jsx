import React from 'react';
import logo from '../assets/images/logo.png';

import '../assets/styles/Header.scss';

const changeActive = (navItem) => {
    console.log(navItem);
    navItem.classList.add('active');
    const active = document.getElementsByClassName('active')[0];
    console.log(active);
}

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <figure className="header__figure">
                <img className="header__figure--img" src={logo} alt="Unipesajes" />
            </figure>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Servicios</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Productos
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Pesaje</a>
                            <a className="dropdown-item" href="#">Medición</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Alimentación</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
)


export default Header;
import React from 'react';
import logo from '../assets/images/logo.png';

import '../assets/styles/Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Header = ({ serviceRef }) => {

    let history = useHistory();

    const handleClick = async () => {
        await history.push('/home');
        scrollToRef(serviceRef);
    }

    const productsNavigate = (e) => {
        e.preventDefault();
        history.push('/products');
    }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                        <Link to="home" className="nav-link"> Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={handleClick}>Servicios</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a onClick={productsNavigate} className="nav-link dropdown-toggle" data-toggle="dropdown">
                            Productos
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="products" className="dropdown-item">Pesaje</Link>
                            <a className="dropdown-item">Medición</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item">Alimentación</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contacto</Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
}

const mapStateToProps = (state) => {
    return {
        serviceRef: state.serviceRef
    }
}


export default connect(mapStateToProps, null)(Header);
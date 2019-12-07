import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/Footer.scss';

const Footer = () => (
    <footer className="container-fluid bg-dark pt-5 pb-5 footer  mt-auto">
        <div className="d-flex justify-content-around align-items-center align-items-md-start flex-column flex-md-row container text-white">
            <article>
                <h5 className="footer__menu--title">Menú</h5>
                <ul className="footer__menu--list">
                    <li className="footer__menu--item">Inicio</li>
                    <li className="footer__menu--item">Productos</li>
                    <li className="footer__menu--item">Servicios</li>
                    <li className="footer__menu--item">Contacto</li>
                </ul>
            </article>
            <article className="contact">
                <h5 className="footer__menu--title">Ponte en contacto</h5>
                <p><strong>Dirección: </strong> Cra 43 #61 - 59 Medellín,Antioquia</p>
                <p><strong>Telefono: </strong>(574) 2548257</p>
                <p><strong>Celular: </strong>(+57) 3014209393</p>
                <p><strong>Mail: </strong><a className="a_mail" href="mailto: ventas@unipesajes.com">ventas@unipesajes.com</a></p>
            </article>
            <article className="d-flex flex-column align-items-center">
                <h5 className="footer__menu--title">Redes Sociales</h5>
                <div className="d-flex justify-content-around w-100">
                    <a className="footer__menu--ancle" href="https://facebook.com">
                        <FontAwesomeIcon className="fa fa-facebook" icon={faFacebookF} />
                    </a>
                    <a className="footer__menu--ancle" href="https://twitter.com">
                        <FontAwesomeIcon className="fa fa-twitter" icon={faTwitter} />
                    </a>
                </div>
            </article>
        </div>
    </footer>
)

export default Footer;
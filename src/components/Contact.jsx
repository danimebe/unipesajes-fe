import React from 'react';
import Maps from './Map';

import '../assets/styles/Contact.scss';


const Contact = () => {
    return <section className="container pt-5">
        <article className="row">
            <div className="col">
                <h2>Contacto</h2>
                <form className="container p-3 h-100">
                    <div className="row justify-content-around mb-3" >
                        <input className="col-10 col-md-4 mb-2 mb-md-0" type="text" placeholder="Nombre" name="name" />
                        <input className="col-10 col-md-4" type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="row justify-content-center mb-3">
                        <textarea className="col-10" name="message" id="message" rows="5" placeholder="Mensaje..."></textarea>
                    </div>
                    <div className="row justify-content-center justify-content-md-start">
                        <button type="submit" className="col-5 col-md-3 offset-md-8">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="col d-flex flex-column justify-content-around">
                <h2 >Información</h2>
                <p><strong>Dirección: </strong> Cra 43 #61 - 59 Medellín,Antioquia</p>
                <p><strong>Telefono: </strong>(574) 2548257</p>
                <p><strong>Celular: </strong>(+57) 3014209393</p>
                <p><strong>Mail: </strong><a className="a_mail" href="mailto: ventas@unipesajes.com">ventas@unipesajes.com</a></p>
            </div>
        </article>
        <article className="location row flex-column position-relative mt-4">
            <h2>Ubicación</h2>
            <span className="mt-4">
                <Maps />
            </span>
        </article>
    </section>
}

export default Contact;
import React from 'react';

const Contact = () => {
    return <section className="container p-5">
        <article className="row">
            <div className="col">
                <h2>Contacto</h2>
                <form className="container p-3">
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
            <div className="col">
                <h2>Información</h2>
            </div>
        </article>
        <article className="location row">
            <h2>Ubicación</h2>
        </article>
    </section>
}

export default Contact;
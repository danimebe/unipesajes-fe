import React from 'react';

import logo from '../assets/images/logo.png';

import '../assets/styles/Admin.scss';

const Admin = (event) => {
    return <section className="login">
        <article className="login__container">
            <figure className="login__container--logo">
                <img className="login__container--img" src={logo} alt=""/>
            </figure>
            <h2>Iniciar sesión - Administrador Unipesajes</h2>
            <form className="login__container--form">
                <input
                    name="username"
                    className="input"
                    type="text"
                    placeholder="Nombre de usuario"
                />
                <input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                />
                <button type="submit" className="button">
                    Iniciar sesión
                </button>
            </form>
        </article>
    </section>
}

export default Admin;
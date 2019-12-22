import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const Services = ({serviceRef}) => {
    console.log(serviceRef);

    return <section ref={serviceRef} className="container d-flex flex-column align-items-center  pt-3 h-60vh mt-3 mb-3">
        <h1>Servicios</h1>
        <article className="d-flex flex-column flex-md-row justify-content-around w-100 mt-4 mb-4">
            <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faTools} size="4x" />
                <h3>Mantenimiento preventivo</h3>
                <ul>
                    <li>Verificación inicial del equipo</li>
                    <li>Limpieza general</li>
                    <li>Reactificación de cuchillas y cojinetes(Equipos mecanicos)</li>
                    <li>Mediciones de sensibilidad del equipo</li>
                    <li>Medición de ohmiajes y voltaje de las celdas de carga</li>
                    <li>Revisión de la acometida eléctrica y cableado</li>
                </ul>
            </div>
            <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faFileAlt} size="4x" />
                <h3>Documentación</h3>
                <ul>
                    <li>Sticker de calibración</li>
                    <li>Protocolo de calibración</li>
                    <li>Copia de la pasantía en masas y balanzas</li>
                    <li>Certificado de las pesas patron</li>
                    <li>Carpeta de seguimiento</li>
                </ul>
            </div>
        </article>
    </section>

}

const mapStateToProps = (state) => {
    return {
        serviceRef: state.serviceRef
    }
}


export default connect(mapStateToProps, null)(Services);
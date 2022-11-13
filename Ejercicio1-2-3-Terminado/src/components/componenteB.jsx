import React, { useState } from "react";
import { Contacto } from "../models/contacto.class";
import PropTypes from "prop-types";

const ComponenteB = ({ contacto }) => {
    const estado = contacto.conectado;

    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h2>Contacto</h2>
            <h4>Nombre: {contacto.nombre}</h4>
            <h4>Apellido: {contacto.apellido}</h4>
            <h4>Email: {contacto.email}</h4>

            <h5>
                Estatus:{" "}
                {conectado === false
                    ? "Contacto no disponible"
                    : "Contacto En linea"}
            </h5>
            <button onClick={() => setConectado(!conectado)}>
                {conectado === false ? "Conectar" : "Desconectar"}
            </button>
        </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = ({ contacto, conectado, borrar }) => {
    useEffect(() => {
        console.log("Contacto creado");
        return () => {
            console.log(`El contacto : ${contacto.name} va a desaparecer`);
        };
    });

    function iconoConectarContacto() {
        if (contacto.conected) {
            return (
                <div>
                    <i
                        onClick={() => conectado(contacto)}
                        className="bi bi-telephone-fill fs-2 d-inline"
                        style={{
                            color: "#018031",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    ></i>
                    <p className="text-muted d-inline ms-3">Conectado...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <i
                        onClick={() => conectado(contacto)}
                        className="bi bi-telephone-x-fill fs-2 d-inline"
                        style={{
                            color: "#e00000",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    ></i>
                    <p className="text-muted d-inline ms-3">Desconectado...</p>
                </div>
            );
        }
    }

    return (
        <div>
            <li
                className="list-group-item text-start fs-6"
                aria-current="true"
                style={{ background: "#dcdcdc" }}
            >
                <span className="fw-bold fs-3 ms-2">{contacto.name}</span>
                <br />
                {contacto.number}
                <br />
                {contacto.email}
                <br />
                <div className="">{iconoConectarContacto()}</div>

                <div style={{textAlign: "right"}}>
                    <p
                        className="text-muted d-inline me-3"
                        style={{ marginBottom: "0" }}
                    >
                        Eliminar contacto
                    </p>
                    <i
                        onClick={() => borrar(contacto)}
                        className="bi bi-person-x d-inline btn btn-danger fs-5"
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    ></i>
                </div>
            </li>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    conectado: PropTypes.func.isRequired,
    borrar: PropTypes.func.isRequired,
};

export default ContactoComponent;

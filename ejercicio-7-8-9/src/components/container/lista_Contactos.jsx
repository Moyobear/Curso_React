import React, { useState } from "react";
import ContactoComponent from "../pure/contacto";
import ContactoForm from "../pure/form/contactoForm";

const ListaContactosComponent = () => {
    const [contactos, setContactos] = useState([]);

    function conectarContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].conected = !tempContactos[index].conected;
        setContactos(tempContactos);
    }

    function borrarContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index, 1);
        setContactos(tempContactos);
    }

    function agregarContacto(contacto) {
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div className="row gap-3 p-5">
            <div>
                <div className="card col-md">
                    <div
                        className="card-header"
                        style={{ background: "#2196f3", border: "none" }}
                    >
                        <h4 className="fw-bold">
                            <span>
                                <i className="bi bi-book me-3"></i>
                            </span>
                            Libreta de Contactos
                        </h4>
                    </div>
                    <div
                        className="card-body p-1"
                        style={{ height: "20rem", overflowY: "scroll" }}
                    >
                        <ul className="list-group" style={{}}>
                            {contactos.map((contacto, index) => {
                                return (
                                    <ContactoComponent
                                        borrar={borrarContacto}
                                        conectado={conectarContacto}
                                        key={index}
                                        contacto={contacto}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <ContactoForm
                add={agregarContacto}
                className="col-md"
                style={{ width: "20vw" }}
            />
        </div>
    );
};

export default ListaContactosComponent;

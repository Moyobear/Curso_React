import React, { useRef } from "react";
import PropTypes from "prop-types";
import Contacto from "../../../models/contacto.class";

const ContactoForm = ({ add }) => {
    const nameRef = useRef("");
    const numberRef = useRef("");
    const emailRef = useRef("");

    function agregarContacto(e) {
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nameRef.current.value,
            numberRef.current.value,
            emailRef.current.value,
            false
        );
        add(nuevoContacto);
    }

    return (
        <form onSubmit={agregarContacto}>
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    background: "#8c8c8c",
                    padding: "1rem",
                    borderRadius: "10px",
                }}
            >
                <h4 className="mb-4 fw-bold">
                    <span className="me-3">
                        <i className="bi bi-person-vcard"></i>
                    </span>
                    Agregar Contacto
                </h4>

                {/* Nombre */}
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ background: "#2196f3" }}
                    >
                        <i className="bi bi-person-lines-fill"></i>
                    </span>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Agregar nombre"
                        autoFocus
                        required
                    />
                </div>

                {/* Numero */}
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ background: "#2196f3" }}
                    >
                        <i className="bi bi-phone"></i>
                    </span>
                    <input
                        ref={numberRef}
                        type="text"
                        className="form-control"
                        id="inputNumber"
                        placeholder="Agregar numero"
                        required
                    />
                </div>

                {/* Email */}
                <div className="input-group mb-3">
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ background: "#2196f3" }}
                    >
                        <i className="bi bi-envelope-at"></i>
                    </span>
                    <input
                        ref={emailRef}
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Agregar Email"
                        required
                    />
                </div>

                {/* Submit */}
                <div className="d-grid gap-2 col-12 mx-auto">
                    <button type="submit" className="btn py-0 btn-success">
                        <i className="bi bi-person-add fs-3"></i>
                    </button>
                </div>
            </div>
        </form>
    );
};

ContactoForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactoForm;

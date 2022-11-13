import React from "react";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./componenteB";

const ComponenteA = () => {
    const contacto = new Contacto(
        "Jonathan",
        "Rodríguez",
        "uncorreodeejemplo@algunservidor.com",
        false
    );

    return (
        <div>
            <ComponenteB contacto={contacto} />
        </div>
    );
};


export default ComponenteA;

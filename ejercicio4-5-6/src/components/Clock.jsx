import React, { useEffect, useState } from "react";

function Clock() {
    //Variables internas que luego se convertiran en el estado
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Jonathan",
        apellidos: "Rodríguez",
    };

    const [user, setUser] = useState(defaultState);

    const actualiceUser = () => {
        return setUser({
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos,
        });
    };

    //procedemos con el componentDidMount:
    useEffect(() => {
        const intervalAge = setInterval(() => {
            actualiceUser();
        }, 1000);
        //procedemos con el componentWillMount:
        return () => {
            clearInterval(intervalAge);
        };
    });

    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {user.nombre} {user.apellidos}
            </h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default Clock;

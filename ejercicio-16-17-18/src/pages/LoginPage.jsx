import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";

const LoginPage = () => {
    const [credentials, setCreadentials] = useState(null);
    const history = useHistory();
    const user = localStorage.getItem("user") || null;

    useEffect(() => {
        if (user) {
            history.push("/dashboard");
        }
    });
    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials);
            localStorage.setItem("user", c);
            history.push("/dashboard");
        }
    });

    return (
        <>
            <LoginForm onSubmit={(e) => setCreadentials(e)} />
            <Link to="/registro">Registrarse</Link>
        </>
    );
};

export default LoginPage;

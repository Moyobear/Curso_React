import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "../components/form/RegisterForm";

const RegisterPage = () => {
    const [credentials, setCredentials] = useState(null);
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
        <div>
            <RegisterForm onSubmit={(e) => setCredentials(e)} />
            <Link to="/login">Acceder</Link>
        </div>
    );
};

export default RegisterPage;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ROLES from "../../models/roles.enum";

const RegisterForm = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, "Nombre de Usuario muy corto")
            .max(12, "UNombre de Usuario muy largo")
            .required("Nombre de Usuario es Obligatorio"),
        email: Yup.string()
            .email("Formato Inválido")
            .required("Email es Obligatorio"),
        role: Yup.string()
            .oneOf(
                [ROLES.USER, ROLES.ADMIN],
                "Debes escoger un Role: Usuario / Administrador"
            )
            .required("El role es Obligatorio"),
        password: Yup.string()
            .min(8, "La contraseña muy corta")
            .required("La contraseña es Obligatoria"),
        confirm: Yup.string()
            .when("password", {
                is: (value) => !!(value && value.length > 0),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "¡Deben coincidir!"
                ),
            })
            .required("Debes confirmar la contraseña"),
    });

    return (
        <div>
            <h4>Registro de Usuario</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    onSubmit(values);
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <label htmlFor="username">Nombre de Usuario</label>
                        <Field
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Tu nombre de usuario"
                        />
                        {errors.username && touched.username && (
                            <ErrorMessage name="username" component="div" />
                        )}

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                        />
                        {errors.email && touched.email && (
                            <ErrorMessage name="email" component="div" />
                        )}

                        <label htmlFor="password">Contraseña</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            type="password"
                        />
                        {errors.password && touched.password && (
                            <ErrorMessage name="password" component="div" />
                        )}

                        <label htmlFor="confirm">Confirma la contraseña</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar"
                            type="password"
                        />
                        {errors.confirm && touched.confirm && (
                            <ErrorMessage name="confirm" component="div" />
                        )}

                        <button type="submit">Registrar cuenta</button>
                        {isSubmitting ? <p>Enviando tus datos...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;

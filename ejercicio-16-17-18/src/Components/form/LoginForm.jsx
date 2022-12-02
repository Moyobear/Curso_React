import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Formato inválido")
        .required("Es necesario el Email"),
    password: Yup.string().required("La contraseña es necesaria"),
});

const LoginForm = ({ onSubmit }) => {
    const initialCredentials = {
        email: "",
        password: "",
    };

    return (
        <Formik
            initialValues={initialCredentials}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    onSubmit(values);
                    actions.resetForm({});
                    actions.setSubmitting(false);
                }, 500);
            }}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
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
                    <button type="submit">Acceder</button>
                    {isSubmitting ? <p>Enviando tus credenciales...</p> : null}
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;

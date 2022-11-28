import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import useList from "./useList";

const TareasLista = () => {
    const TaskSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        description: Yup.string()
            .min(2, "Too Short!")
            .max(100, "Too Long!")
            .required("Required"),
    });

    const tasks = useList([]);

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <Formik
                initialValues={{
                    name: "",
                    description: ""
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        tasks.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }}
                validationSchema={TaskSchema}
            >
                {({ errors }) => (
                    <Form>
                        <Field name="name" placeholder="Nombre de la Tarea" />
                        {errors && errors.name}
                        <Field
                            name="description"
                            placeholder="Task Descripción de la Tarea"
                        />
                        {errors && errors.description}

                        <button type="submit">Crear</button>
                    </Form>
                )}
            </Formik>
            {tasks.isEmpty() ? (
                <p>Lista de Tareas vacía</p>
            ) : (
                tasks.value.map((task, index) => (
                    <li
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <input
                            type="button"
                            onClick={() => tasks.remove(index)}
                            checked={false}
                            value="Eliminar"
                        />
                        <p style={{ fontWeight: "bold", marginRight: "5px" }}>
                            {task.name}
                        </p>
                        <p>{task.description}</p>
                    </li>
                ))
            )}
        </div>
    );
};

export default TareasLista;

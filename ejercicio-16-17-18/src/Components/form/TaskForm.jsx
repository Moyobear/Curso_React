import React from "react";
import LEVELS from "../../models/levels.enum";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const TaskForm = ({ onAdd }) => {
    const TaskSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Muy corta!")
            .max(35, "Muy Larga!")
            .required("Obligatorio!"),
        description: Yup.string()
            .min(10, "Muy corta!")
            .max(100, "Muy Larga!")
            .required("Obligatorio!"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                description: "",
                level: LEVELS.NORMAL,
                complete: false,
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    onAdd(values);
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
                        placeholder="Descripción de la Tarea"
                    />
                    {errors && errors.description}

                    <Field as="select" name="level">
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    <button type="submit">Crear</button>
                </Form>
            )}
        </Formik>
    );
};

export default TaskForm;

import React, { useState } from "react";
import { useAppContext } from "../AppProvider";

const TaskForm = () => {
    const { dispatch } = useAppContext();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const tarea = { name, description, id: Date.now() };
        dispatch({
            type: "ADD_TASK",
            payload: tarea,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="alert alert-success text-center my-3">
                <h3>Aquí puedes crear tus Tareas</h3>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="">
                    Nombre de la Tarea
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="">
                    Descripción de la Tarea
                </label>
                <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <input
                className="btn btn-primary"
                type="submit"
                value="Crear Tarea"
            />
        </form>
    );
};

export default TaskForm;

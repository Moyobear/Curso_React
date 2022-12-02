import React from "react";
import useList from "../../hooks/useList";
import LEVELS from "../../models/levels.enum";
import Taskform from "../form/TaskForm";

const Tasklist = ({ user }) => {
    const defaultTask = {
        name: "Estudiar React",
        description: "Culminar mi curso de React",
        level: LEVELS.BLOCKING,
        complete: false,
    };

    const tasks = useList([defaultTask]);
    const usuario = JSON.parse(user);

    return (
        <div>
            <h1>Lista de Tareas - Usuario: {usuario.email}</h1>
            <Taskform onAdd={(values) => tasks.push(values)} />
            {tasks.isEmpty() ? (
                <p>La Lista de Tareas está vacía</p>
            ) : (
                tasks.value.map((task, index) => (
                    <div
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                        role="button"
                    >
                        <button onClick={() => tasks.remove(index)}>
                            Eliminar
                        </button>
                        <p style={{ fontWeight: "bold", marginRight: "5px" }}>
                            {task.name}
                        </p>
                        <p>{task.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Tasklist;

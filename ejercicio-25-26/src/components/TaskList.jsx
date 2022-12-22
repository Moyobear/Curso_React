import React from 'react';
import { useAppContext } from '../AppProvider';

const TaskList = () => {
    const {tasks, dispatch} = useAppContext();

    let lista = <h5>No tienes ninguna tarea...</h5>

    if(tasks.length > 0) {
        lista = (
            <ul className="list-group">
                {tasks.map((item, index) => (
                    <div>
                        <li key={index} className="list-group-item">
                        <p><strong>{item.name}</strong></p>
                        <p><em>{item.description}</em></p>
                        </li>
                        <button onClick={()=> dispatch({
                            type: "DELETE_TASK",
                            payload: item.id,
                        })} className="btn btn-danger mb-3"><i class="bi bi-trash3"></i></button>
                    </div>
                ))}
            </ul>
        )
    }
    
    return (
        <div>
            <div className="alert alert-primary text-center my-3">
                <h3>Lista de Tareas</h3>

            </div>
                {lista}
            
        </div>
    );
}

export default TaskList;


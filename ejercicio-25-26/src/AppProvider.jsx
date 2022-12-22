import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

//Aquí creamos nuestro propio hook
const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    tasks: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload),
            };
        default:
            return { ...state };
    }
};

//Este componente inyectará el contexto dentro de los otros componentes
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ tasks: state.tasks, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };

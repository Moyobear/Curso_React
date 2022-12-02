import { useState } from "react";

const useList = (initialState = []) => {
    const [values, setValues] = useState();

    const push = (item) => {
        setValues((values) => [...values, item]);
    };

    const remove = (index) => {
        setValues((values) => values.filter((_, i) => i !== index));
    };

    const isEmpty = () => values.length === 0;

    return {
        values,
        setValues,
        push,
        remove,
        isEmpty,
    };
};

export default useList;

import { useState } from "react";

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    const push = (element) => {
        setValue([...value, element]);
    };

    const remove = (index) => {
        setValue(value.filter((_, i) => i !== index));
    };

    const isEmpty = () => value.length === 0;

    return {
        value,
        setValue,
        push,
        remove,
        isEmpty,
    };
};

export default useList;

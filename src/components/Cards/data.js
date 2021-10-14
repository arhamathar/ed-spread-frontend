import { useState } from "react";

const useData = () => {
    const initialState = {
        title: "",
        description: "",
        price: 0,
        image: "",
        type: "BOOTCAMP",
    };

    const [showModal, setShowModal] = useState(false);
    const [course, setCourse] = useState(initialState);

    const toggle = () => setShowModal(!showModal);

    const onChangeHandler = (e) => {
        setCourse((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return { showModal, course, toggle, onChangeHandler };
};

export default useData;

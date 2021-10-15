import { useState } from "react";

const useData = ({ bootcamp }) => {
    const { title, description, price, image, type } = bootcamp;
    const initialState = {
        title,
        description,
        price,
        image,
        type,
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

import { useState } from 'react';

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
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [course, setCourse] = useState(initialState);

    const toggle = () => setShowModal(!showModal);

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

    const onChangeHandler = (e) => {
        setCourse((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        showModal,
        showDeleteModal,
        course,
        toggle,
        toggleDeleteModal,
        onChangeHandler,
    };
};

export default useData;

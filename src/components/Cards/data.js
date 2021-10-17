import { useState } from 'react';

const useData = ({ bootcamp }) => {
    const { title, description, price, image, type, url } = bootcamp;
    const initialState = {
        title,
        description,
        price,
        image,
        type,
        url,
    };

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [course, setCourse] = useState(initialState);

    const toggle = () => {
        setShowModal(!showModal);
        setCourse(initialState);
    };

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

    const onChangeHandler = (e) => {
        if (e.target.name !== 'image')
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

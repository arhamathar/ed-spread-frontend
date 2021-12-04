import { useState } from 'react';

const useData = ({ course }) => {
    const { title, description, price, image, type, url } = course;
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
    const [editCourse, setEditCourse] = useState(initialState);
    const [showReferalModal, setShowReferalModal] = useState(false);

    const toggle = () => {
        setShowModal(!showModal);
        setEditCourse(initialState);
    };

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

    const toggleReferalModel = () => setShowReferalModal(!showReferalModal);

    const onChangeHandler = (e) => {
        if (e.target.name !== 'image')
            setEditCourse((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
    };

    return {
        showModal,
        showDeleteModal,
        showReferalModal,
        editCourse,
        toggle,
        toggleReferalModel,
        toggleDeleteModal,
        onChangeHandler,
    };
};

export default useData;

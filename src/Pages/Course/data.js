import { useState, useCallback, useEffect } from 'react';
import useHttp from '../../hooks/useHttp';

const useData = () => {
    const { sendRequest } = useHttp();
    // const initialState = {
    //     title: '',
    //     description: '',
    //     price: 0,
    //     image: '',
    //     type: 'BOOTCAMP',
    // };

    const [showModal, setShowModal] = useState(false);
    const [courses, setCourses] = useState([]);

    const reload = () => {
        getAllCourses();
    };

    const getAllCourses = useCallback(async () => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/courses`,
                'GET',
                null,
                '/courses'
            );
            setCourses(resp.courses);
        } catch (e) {}
    }, [sendRequest]);

    useEffect(() => {
        getAllCourses();
    }, [getAllCourses]);

    const toggle = () => setShowModal(!showModal);

    // const onChangeHandler = (e) => {
    //     setCourses((prev) => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    return { showModal, courses, toggle, reload };
};

export default useData;

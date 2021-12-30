import { useState, useCallback, useEffect } from 'react';
import useHttp from '../../hooks/useHttp';

const useData = () => {
    const { sendRequest,loading } = useHttp();

    const [courses, setCourses] = useState([]);

    const reload = () => {
        getAllCourses();
    };

    const getAllCourses = useCallback(async () => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/course/courses`,
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

    return { courses, loading, reload };
};

export default useData;

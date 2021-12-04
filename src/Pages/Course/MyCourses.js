import React, { useState, useEffect, useContext, useCallback } from 'react';

import useHttp from '../../hooks/useHttp';
import { AuthContext } from '../../context/authContext';
import CourseCard from '../../components/Cards/courseCard';

const MyCourse = () => {
    const auth = useContext(AuthContext);

    const { sendRequest } = useHttp();

    const [courses, setCourses] = useState([]);

    const getMyCourses = useCallback(async () => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/my-course/${auth.userId}`,
                'GET',
                null,
                '/my-courses',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token,
                }
            );
            setCourses(resp.courses);
        } catch (e) {}
    }, [auth.token, auth.userId]);

    useEffect(() => {
        getMyCourses();
    }, [getMyCourses]);

    return (
        <>
            <div className='courseh1'>
                <h1>Your Purchases</h1>
            </div>
            <div className='courses'>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard
                            key={course._id}
                            course={course}
                            purchased={true}
                        />
                    ))
                ) : (
                    <div className='jumbotron-fluid'>
                        You have not purchased any course, Buy One Now :)
                    </div>
                )}
            </div>
        </>
    );
};

export default MyCourse;

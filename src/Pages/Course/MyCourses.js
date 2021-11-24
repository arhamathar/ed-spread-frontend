import React,{ useState, useEffect, useContext } from 'react'

import useHttp from '../../hooks/useAuth';
import { AuthContext } from '../../context/authContext';
import CourseCard from '../../components/Cards/courseCard';

const MyCourse = () => {    
    const auth = useContext(AuthContext);

    const { sendRequest } = useHttp();

    const [courses, setCourses] = useState([]);

    const getMyCourses = async() => {
        try {
            const resp = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/course/my-course/${auth.userId}`,
                'GET',
                null,
                '/my-courses'
            );
            setCourses(resp.courses);
        } catch (e) {}
    }

    useEffect(() => {
        getMyCourses()
    }, [courses])

    return (
        <>
            <div  className='courseh1'>
                <h1>Your Purchases</h1>
            </div>
            <div className='courses'>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard
                            key={course._id}
                            course={course}
                        />
                    ))
                ) : (
                    <div className='jumbotron-fluid'>
                        You have not purchased any course, Buy One Now :)
                    </div>
                )}
            </div>
        </>
    )
}

export default MyCourse

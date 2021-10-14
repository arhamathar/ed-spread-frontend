import React, { useState, useEffect } from "react";
import Course from "./course";
import useHttp from "../../hooks/useHttp";

const Courses = () => {
    const { sendRequest } = useHttp();

    const [courses, setCourses] = useState([]);

    const getAllCourses = async () => {
        try {
            const resp = await sendRequest(
                // `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/bootcamps`,
                `http://localhost:5000/api/course/courses`,
                "GET",
                null,
                "/courses"
            );
            setCourses(resp.courses);
            console.log(courses);
        } catch (e) {}
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    return (
        <div>
            <div className='courseh1'>
                <h1 className='inline-block'>Our Courses</h1>
            </div>
            <div className='courses'>
                {courses.map((course) => {
                    return <Course course={course} key={course._id} />;
                })}
                {/* <Course />
                <Course />
                <Course /> */}
            </div>
        </div>
    );
};

export default Courses;

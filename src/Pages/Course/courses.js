import React from 'react';

import CourseCard from '../../components/Cards/courseCard';
import useData from './data';

const Courses = () => {
    const { courses } = useData();

    return (
        <div>
            <div className="courseh1">
                <h1 className="inline-block">Our Courses</h1>
            </div>
            <div className="courses">
                {courses.length > 0 &&
                    courses.map((course) => (
                        <CourseCard key={course._id} course={course} />
                    ))}
            </div>
        </div>
    );
};

export default Courses;

import React from 'react';

import CourseCard from '../../components/Cards/courseCard';
import useData from './data';

const Courses = () => {
    const { courses, reload } = useData();

    return (
        <div>
            <div className="courseh1">
                <h1>Our Courses</h1>
            </div>
            <div className="courses routes-height">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard
                            key={course._id}
                            course={course}
                            reload={reload}
                        />
                    ))
                ) : (
                    <div className="jumbotron-fluid">No course to display</div>
                )}
            </div>
        </div>
    );
};

export default Courses;

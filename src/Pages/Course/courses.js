import React from 'react';

import CourseCard from '../../components/Cards/courseCard';
import useData from './data';
import Spinner from '../../components/Spinner';

const Courses = () => {
    const { courses, reload, loading } = useData();

    return (
        <div className='bootcamps routes-height'>
            <div className='courseh1'>
                <h1>Our Courses</h1>
            </div>
            <div className='courses'>
                {loading && (
                    <div className='text-center mx-auto'>
                        <Spinner />
                    </div>
                )}
                {courses.length > 0 && !loading ? (
                        courses.map((course) => (
                            <CourseCard
                                key={course._id}
                                course={course}
                                reload={reload}
                            />
                        ))
                    ) : (
                        <div className='jumbotron-fluid text-white'>No course to display</div>
                    )}
            </div>
        </div>
    );
};

export default Courses;

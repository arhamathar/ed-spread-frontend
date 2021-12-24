import React from 'react';

import BootcampCard from '../../components/Cards/bootcampCard';
import useData from './data';

const Courses = () => {
    const { courses, reload } = useData();

    return (
        <div className='bootcamps'>
            <div className='courseh1'>
                <h1>Our Courses</h1>
            </div>
            <div className='courses'>
                {/* {courses.length > 0 ? (
                    courses.map((course) => ( */}
                <BootcampCard
                // key={course._id}
                // course={course}
                // reload={reload}
                />
                {/* )) */}
                {/* ) : (
                    <div className='jumbotron-fluid'>No course to display</div>
                )} */}
            </div>
        </div>
    );
};

export default Courses;

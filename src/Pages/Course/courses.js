import React from "react";
import Course from "./course";

const Courses = () => {
    return (
        <div>
            <div className='courseh1'>
                <h1 className='inline-block'>Our Courses</h1>
            </div>
            <div className='courses'>
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    );
};

export default Courses;

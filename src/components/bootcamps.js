import React from "react";
import Bootcamp from "./bootcamp";

const Bootcamps = () => {
    return (
        <div>
            <div className='courseh1'>
                <h1 className='inline-block'>Bootcamps</h1>
            </div>
            <div>
                <Bootcamp />
                <Bootcamp />
            </div>
        </div>
    );
};

export default Bootcamps;

import React from "react";
import { Button } from "reactstrap";

const Learn = () => {
    return (
        <div className='learn'>
            <div className='titleh1'>
                <h1 style={{ fontSize: "50px" }}>What will You learn</h1>
                <h6 style={{ color: "gray" }}>
                    Quisque maximus, massa aliquet facilisis blandit, ligula
                    lectus porta velit, eget congue sapien felis id augue.
                    Vivamus vitae massa ac mauris iaculis euismod et nec metus.
                    Cras fermentum ac nunc ut auctor.
                </h6>
                <Button color='primary'>Find course</Button>
            </div>
            <img
                src='https://impreza23.us-themes.com/wp-content/uploads/2020/08/you-x-ventures-6awfTPLGaCE-unsplash.jpg'
                alt='image1'
            />
        </div>
    );
};

export default Learn;

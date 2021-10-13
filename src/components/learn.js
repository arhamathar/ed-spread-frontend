import React from "react";
import { Button } from "reactstrap";

const Learn = () => {
    return (
        <div className='learn'>
            <div className='titleh1'>
                <h1>What will You learn</h1>
                <h5>
                    Quisque maximus, massa aliquet facilisis blandit, ligula
                    lectus porta velit, eget congue sapien felis id augue.
                    Vivamus vitae massa ac mauris iaculis euismod et nec metus.
                    Cras fermentum ac nunc ut auctor.
                </h5>
                <Button color='info'>Find course</Button>
            </div>
            <img
                className='learnimage'
                src='https://impreza23.us-themes.com/wp-content/uploads/2020/08/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg'
                alt='image1'
            />
        </div>
    );
};

export default Learn;

import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Teach = () => {
    return (
        <div className='learn'>
            <img
                className='learnimage'
                src='https://impreza23.us-themes.com/wp-content/uploads/2020/08/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg'
                alt='image1'
            />
            <div className='titleh1'>
                <h1>How We Teach</h1>
                <h5>
                    Quisque maximus, massa aliquet facilisis blandit, ligula
                    lectus porta velit, eget congue sapien felis id augue.
                    Vivamus vitae massa ac mauris iaculis euismod et nec metus.
                    Cras fermentum ac nunc ut auctor.
                </h5>
                <Button color='info'>
                    <Link to='about'>Find course</Link>
                </Button>
            </div>
        </div>
    );
};

export default Teach;

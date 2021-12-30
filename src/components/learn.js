import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Animation from '../assests/2.png';

const Learn = () => {
    return (
        <div className='learn'>
            <img className='learnimage' src={Animation} alt='image1' />
            <div className='titleh1'>
                <h1>What will You learn ?</h1>
                <h5>
                    Here at Ed-Spread we will be making you learn the most
                    booming technologies in an efficient manner,the courses will
                    be making you clear with all the concepts and you will be
                    able to do several tasks with the courses taught here. You
                    will enjoy learning the technologies here.
                </h5>
                <Button color='primary' className='learn-button text-white'>
                    <Link to='courses'>Find course</Link>
                </Button>
            </div>
        </div>
    );
};

export default Learn;

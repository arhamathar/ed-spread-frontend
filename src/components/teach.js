import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Animation from '../assests/3.png';

const Teach = () => {
    return (
        <div className='learn'>
            <div className='titleh1'>
                <h1>How We Teach</h1>
                <h5>
                    We at Ed spread make you clear with the topics of
                    technologies with a detailed illustrations and help you
                    clear all doubts regarding that particular concept and also,
                    we clear the doubts at any time regarding that concept. You
                    will enjoy the way here we teach
                </h5>
                <Link to='/about'>
                    <Button color='primary' className='teach-button'>
                        Find out more
                    </Button>
                </Link>
            </div>
            <img className='learnimage' src={Animation} alt='image1' />
        </div>
    );
};

export default Teach;

import React from 'react';
import Animation from '../assests/5.png';

const Banner = () => {
    return (
        <div className='banner routes-height'>
            <div className='banner-para'>
                <h1>WELCOME TO ED-SPREAD</h1>
                <h5>Learn the newest technologies and explore with us</h5>

                <input
                    type='email'
                    class='banner-input'
                    id='inputPassword2'
                    placeholder='Your Email Address'
                />
                <button
                    type='submit'
                    class='btn btn-primary banner-button mb-2'
                >
                    Get started
                </button>
            </div>
            <div className='banner-ani'>
                <img src={Animation} alt='logo' />
            </div>
        </div>
    );
};

export default Banner;

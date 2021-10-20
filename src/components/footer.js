import React from 'react';
import SocialIconLinks from './SocialIconLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class='bg-dark text-center text-white'>
                <div class='container p-4'>
                    <section class=''>
                        <div class='row'>
                            <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
                                <h5 class='text-uppercase'>Quick Links</h5>

                                <ul class='list-unstyled mb-0'>
                                    <li>
                                        <Link class='text-white' to='./home'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class='text-white' to='./courses'>
                                            courses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class='text-white' to='./about'>
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
                                <h5 class='text-uppercase'>Contact us</h5>

                                <ul class='list-unstyled mb-0'>
                                    <li>Edspread2@gmail.com</li>
                                    <li>+91 78426 05842</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class='mb-4'>
                        <p>Find us on</p>
                    </section>

                    <section class='mb-4'>
                        <SocialIconLinks
                            href={
                                'https://www.google.com/url?q=http://www.youtube.com/channel/UCt4EU38IOgU9ww1Yrq_n-vA&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFoEAKaTrNwbawHpHOfo9RqBfD5Og'
                            }
                            icon={'fab fa-youtube'}
                        />
                        <SocialIconLinks
                            href={
                                'https://www.google.com/url?q=https://www.instagram.com/_edspread_/&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNH49ur8Wn8xH_qUUPV1NzvneQohew'
                            }
                            icon={'fab fa-instagram'}
                        />
                        <SocialIconLinks
                            href={
                                'https://www.google.com/url?q=https://www.linkedin.com/in/ed-spread-76946821a/&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFZ3fyhwHVMWfnGa2bncvwHLZeGvQ'
                            }
                            icon={'fab fa-linkedin'}
                        />
                    </section>
                </div>

                <div class='text-center p-3'>© 2021 Copyright: Ed Spread</div>
            </footer>
        </div>
    );
};

export default Footer;

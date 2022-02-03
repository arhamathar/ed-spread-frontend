import React from 'react';
import SocialIconLinks from './SocialIconLinks';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';
import Logo from '../assests/symbol.png';

const Footer = () => {
    return (
        <div className='foot'>
            <div className='footer'>
                <div className='footer1'>
                    <NavbarBrand className='logo text-light'>
                        <img src={Logo} alt='logo' />
                        ED SPREAD
                    </NavbarBrand>
                    <h5>
                        Ed spread is the online education platform, allowing you
                        to master relevant and in-demand skills. Our courses are
                        based on the combination of theory and with practical
                        tasks for real projects, giving you both new skills and
                        many more opportunities.
                    </h5>
                </div>
                <div className='footer2'>
                    <h2>Quick Links</h2>
                    <ul class='list-unstyled'>
                        <li>
                            <Link class='text-white' to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link class='text-white' to='/courses'>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link class='text-white' to='/about'>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link class='text-white' to='/my-referral'>
                                Referrals
                            </Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/privacy-policy'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/refund-policy'>
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link className='text-light' to='/terms-condition'>
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer3'>
                    <h2>Contact Info</h2>
                    <div className='clarification-iconf'>
                        <SocialIconLinks
                            href={
                                'https://www.google.com/url?q=http://www.youtube.com/channel/UCt4EU38IOgU9ww1Yrq_n-vA&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFoEAKaTrNwbawHpHOfo9RqBfD5Og'
                            }
                            icon={'fas fa-envelope'}
                        />
                        <h5>support@edspread.in</h5>
                    </div>
                    <div className='clarification-iconf'>
                        <SocialIconLinks
                            href={
                                'https://www.google.com/url?q=http://www.youtube.com/channel/UCt4EU38IOgU9ww1Yrq_n-vA&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFoEAKaTrNwbawHpHOfo9RqBfD5Og'
                            }
                            icon={'fas fa-phone'}
                        />
                        <h5>+91 78426 05842</h5>
                    </div>
                    <div className='footer4'>
                        <h5>Find us on</h5>
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
                        <SocialIconLinks
                            href='https://chat.whatsapp.com/Kfj7fVrzvkBL51KWFPzw4N'
                            icon={'fab fa-whatsapp'}
                        />
                    </div>
                </div>
            </div>
            <p>© 2021 All Rights Reserved: Developed By Ed-Spread</p>
        </div>
    );
};

export default Footer;

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Collapse,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assests/symbol.png';
import { AuthContext } from '../context/authContext';
import MyReferralPoints from './Modals/myReferralPoints';

const Navba = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);
    const [showReferralModal, setShowReferralModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleReferralModal = () => setShowReferralModal(!showReferralModal);

    const logoutHandler = () => {
        auth.logout();
        history.push('/login');
    };

    return (
        <div>
            <Navbar
                className='navbar navbar-stick navbar-dark '
                light
                expand='md'
            >
                <NavbarBrand className='logo text-light'>
                    <NavLink
                        to='/'
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <img src={Logo} alt='logo' />
                        ED SPREAD
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className='ml-auto text-light d-flex align-items-center largeText'
                        navbar
                    >
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/'
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/about'
                            >
                                About
                            </NavLink>
                        </NavItem>
                        {auth.isLoggedIn && (
                            <NavItem>
                                <NavLink
                                    onClick={() => setIsOpen(false)}
                                    className='text-light'
                                    to='/my-courses'
                                >
                                    My Courses
                                </NavLink>
                            </NavItem>
                        )}
                        <NavItem>
                            <Button
                                className='text-light bg-transparent btn:focus'
                                onClick={() =>
                                    setShowReferralModal(!showReferralModal)
                                }
                            >
                                My Referrals
                            </Button>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/courses'
                            >
                                Courses
                            </NavLink>
                        </NavItem>
                        {auth.isLoggedIn &&
                            (auth.role === 'ADMIN' ||
                                auth.role === 'SUPER_USER') && (
                                <NavItem>
                                    <NavLink
                                        onClick={() => setIsOpen(false)}
                                        className='text-light'
                                        to='/dashboard'
                                    >
                                        Dashboard
                                    </NavLink>
                                </NavItem>
                            )}
                        {!auth.isLoggedIn && (
                            <NavItem>
                                <NavLink
                                    onClick={() => setIsOpen(false)}
                                    className='text-light'
                                    to='/login'
                                >
                                    Log In
                                </NavLink>
                            </NavItem>
                        )}
                        {!auth.isLoggedIn && (
                            <NavItem>
                                <NavLink
                                    onClick={() => setIsOpen(false)}
                                    className='btn-primary signup'
                                    to='/signup'
                                >
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        )}
                        {auth.isLoggedIn && (
                            <NavItem>
                                <Button
                                    color='transparent'
                                    onClick={logoutHandler}
                                >
                                    Log Out
                                </Button>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
            <MyReferralPoints
                showModal={showReferralModal}
                toggle={toggleReferralModal}
            />
        </div>
    );
};

export default Navba;

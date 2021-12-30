import React, { useContext, useState,useEffect } from 'react';
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

const Navba = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logoutHandler = () => {
        auth.logout();
        history.push('/login');
    };
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 150){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 768px)").matches
    )
    
    useEffect(() => {
        window
        .matchMedia("(max-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
    }, [matches]);


    return (
        <div>
            <Navbar
                className={`navbar navbar-stick navbar-dark ${colorChange ? 'solid-navbar' : ''}`}
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
                <Collapse isOpen={isOpen} navbar className={`${matches ? 'solid-navbar' : ''}`}>
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
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/my-referral'
                            >
                                My Referrals
                            </NavLink>
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
                                    className='btn-primary signup text-white'
                                    to='/signup'
                                >
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        )}
                        {auth.isLoggedIn && (
                            <NavItem>
                                <Button
                                    color='primary'
                                    onClick={logoutHandler}
                                >
                                    Log Out
                                </Button>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navba;

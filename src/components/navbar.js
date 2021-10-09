import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Navba = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='bg-dark navbar-dark' light expand='md'>
                <NavbarBrand className='text-light'>ED SPREAD</NavbarBrand>
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
                                to='/courses'
                            >
                                Courses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/dashboard'
                            >
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/login'
                            >
                                Log In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                className='text-light'
                                to='/signup'
                            >
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navba;

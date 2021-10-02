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
            <Navbar color='light' light expand='md'>
                <NavbarBrand>ED SPREAD</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' color='black' navbar>
                        <NavItem>
                            <NavLink color='black' to='/courses'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/courses'>Courses</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/courses'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/login'>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navba;

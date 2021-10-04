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
            <Navbar className="bg-dark" light expand="md">
                <NavbarBrand className="text-light">ED SPREAD</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto text-light" navbar>
                        <NavItem>
                            <NavLink className="text-light" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-light" to="/courses">
                                Courses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-light" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-light" to="/login">
                                Log In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-light" to="/signup">
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

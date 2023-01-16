import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../assests/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <header className='header'>
                <nav
                    className={`navbar g-0 d-flex justify-content-between align-items-center`}
                >
                    <a
                        href='/'
                        className='nav-logo d-flex justify-content-center align-self-center'
                    >
                        <img
                            src={logo}
                            className='logo'
                            alt='logo'
                            loading='lazy'
                        />
                    </a>
                    <ul
                        className={`nav-menu d-flex justify-content-center align-items-center ${
                            show ? "active" : ""
                        }`}
                    >
                        <li className='nav-item'>
                            <NavLink
                                to='/'
                                className='nav-link'
                                onClick={() => setShow(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/Products'
                                onClick={() => setShow(false)}
                                className='nav-link'
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/Solutions'
                                onClick={() => setShow(false)}
                                className='nav-link'
                            >
                                Solutions
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/AboutUS'
                                onClick={() => setShow(false)}
                                className='nav-link'
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className='nav-item d-flex d-md-none'>
                            <NavLink
                                to='/Contact'
                                onClick={() => setShow(false)}
                                className='nav-link contact'
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        className='contactbtn'
                        onClick={() => navigate("/Contact")}
                    >
                        Contact Us
                    </div>
                    <div
                        className={`hamburger ${show && `active`}`}
                        onClick={() => setShow(!show)}
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;

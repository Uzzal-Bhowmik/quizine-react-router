import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className='navbar shadow container-fluid'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='d-flex justify-content-center align-items-center'>
                        <img src={logo} alt="logo" width="50px" />
                        <span className='brand'>quizine<span className="highlight">.</span></span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pb-3 pb-md-0 text-center">
                        <NavLink
                            to="/"
                            className={
                                `navlink 
                                ${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}
                                `
                            }
                        >
                            Home
                        </NavLink>

                        <HashLink smooth to="/#topics" className='navlink'>
                            Topics
                        </HashLink>

                        <NavLink

                            to="/stats"
                            className={
                                `navlink 
                                ${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}
                                `
                            }
                        >
                            Statistics
                        </NavLink>

                        <NavLink
                            to="/blogs"
                            className={
                                `navlink 
                                ${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}
                                `
                            }
                        >
                            Blogs
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
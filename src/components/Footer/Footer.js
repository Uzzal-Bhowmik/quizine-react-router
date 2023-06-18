import React from 'react';
import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className='footer d-flex justify-content-between align-items-center container'>
                <div>
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" width="40px" />
                        <span style={{ fontFamily: "Unbounded", fontSize: "30px" }} className='ms-2'>quizine <span className='highlight'>.</span></span>
                    </div>
                    <p className="text-muted mt-2 ms-2" >We support programs that create advancement for people</p>
                </div>
                <div className='footer-links'>
                    <Link to="/">Home</Link>
                    <a href="#topics">Topics</a>
                    <Link to="/stats">Statistics</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </div>


            <div className='mt-2 pt-3 footer-text'>
                <hr className='text-muted mx-4' />
                <p className="text-center">© Copyright 2023 Quizine Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
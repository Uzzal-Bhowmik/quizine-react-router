import React from 'react';
import "./TopBanner.css";
import heroBg from "../../images/hero-bg.png";
import { HashLink } from 'react-router-hash-link';
import logo from "../../images/logo.png";


const TopBanner = () => {
    return (
        <div className='top-banner' style={{ backgroundImage: `url("${heroBg}")` }}>

            {/* logo in banner for mobile devices */}
            <div className="banner-logo">
                <div className='d-flex align-items-center mb-4'>
                    <img src={logo} alt="" width="50px" />
                    <span style={{ fontFamily: "Unbounded", fontSize: "3rem" }} className='ms-3 mb-2'>quizine <span className='highlight'>.</span></span>
                </div>
            </div>

            <div className='heading w-md-50 text-center text-white mt-md-5 ms-3 p-2'>
                <p className='top-subtitle'>Best platform to empower new skills.</p>
                <h1><span className='title'>Quizine</span> Academy</h1>
                <p className='px-5'>Learn new topics everyday with passion, fun, hope and love. <br />Play fun games, quizzes and many more.</p>
                <HashLink className='btn btn-light px-5 py-2' to="/#topics">Explore Topics</HashLink>
            </div>
        </div>
    );
};

export default TopBanner;
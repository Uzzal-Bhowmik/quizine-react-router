import React from 'react';
import "./TopBanner.css";
import heroBg from "../../images/hero-bg.png";
import { HashLink } from 'react-router-hash-link';

const TopBanner = () => {
    return (
        <div className='top-banner' style={{ backgroundImage: `url("${heroBg}")` }}>
            <div className='heading w-50 text-center text-white mt-5 ms-3 p-2'>
                <p>Best platform to empower new skills.</p>
                <h1><span className='title'>Quizine</span> Academy</h1>
                <p className='px-5 '>Learn new topics everyday with passion, fun, hope and love. <br />Play fun games, quizzes and many more.</p>
                <HashLink className='btn btn-light px-5 py-2' to="/#topics">Explore Topics</HashLink>
            </div>
        </div>
    );
};

export default TopBanner;
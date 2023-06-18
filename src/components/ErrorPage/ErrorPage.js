import React from 'react';
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='d-flex justify-content-center align-items-center text-center' style={{ height: "100vh" }}>
            <div>
                <h1 className='text-danger fw-bolder my-3'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className='fw-bold'>
                    <i>{error.status}, {error.error.message}</i>
                </p>



                <Link to="/" className='text-decoration-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "26px", height: "60px", marginRight: "5px", marginBottom: "1px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Go Back To Home</Link>
            </div>
        </div>
    );
}
import React from 'react';
import "./BlogCard.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const BlogCard = ({ blog }) => {
    const { id, title, author, img, desc, date } = blog;

    return (
        <div className="card mb-5 shadow" style={{ maxWidth: "1000px" }}>
            <div className="row g-0">

                <div className="col-md-4 card-cols">
                    <img src={img} className="img-fluid rounded-4" alt={title} style={{ width: "300px", height: "220px" }} />
                </div>

                <div className="col-md-8 card-cols">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                        <p className='m-0 pb-3 ps-1 text-muted'><small className="fw-semibold">by {author}</small></p>

                        <p className="card-text mb-3" style={{ fontSize: "15px" }}>{desc.slice(0, 408)}...</p>

                        <div className='row'>
                            <p className="card-text col-md-9 m-0">
                                <small className="text-body-secondary">
                                    Last updated
                                    <span className='fw-semibold'> {date}</span>
                                </small>
                            </p>

                            <div className=' col-md-3 text-muted'>
                                <Link to={`/blog/${id}`} className='read-more text-decoration-none  text-success'>
                                    Read More
                                </Link>
                                <span className="arrow-icon  text-success"><FaArrowRight></FaArrowRight></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default BlogCard;

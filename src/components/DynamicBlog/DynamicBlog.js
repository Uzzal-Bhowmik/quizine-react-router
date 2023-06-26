import React, { useEffect, useState } from 'react';
import "./DynamicBlog.css";
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const DynamicBlog = () => {
    const id = useLoaderData();
    // const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => {
                const blog = data.find(blg => blg.id === id);
                setBlog(blog);
            })
    }, [id])


    return (
        <div className='container mx-auto dyno-blog'>
            <div className='my-4'>
                <img src={blog?.img} alt="" style={{ width: "100%", height: "500px" }} />
            </div>

            <div className='blog-desc'>
                <h1>{blog?.title}</h1>
                <p className='text-bold text-muted'><small>by {blog?.author}</small></p>

                <p className='px-2'>{blog?.desc}</p>

                <p className='text-bold text-muted'><small>Last Updated On {blog?.date}</small></p>

                <div>
                    <span className="arrow-icon text-success"><FaArrowLeft></FaArrowLeft></span>
                    <Link to={`/blogs`} className='ps-3 pt-3 read-more text-decoration-none  text-success'>
                        Go Back
                    </Link>
                </div>

            </div>


        </div>
    );
};

export default DynamicBlog;
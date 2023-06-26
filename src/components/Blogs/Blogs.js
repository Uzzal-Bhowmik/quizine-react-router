import React from 'react';
import "./Blogs.css";
import blogBg from "../../images/blog-bg.jpg";
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const blogs = useLoaderData();


    return (
        <div className='blogs'>

            {/* banner */}
            <div className="blog-banner overlay" style={{ backgroundImage: `url(${blogBg}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)` }}>
                <div>
                    <h2>Top Blogs of This Week ❤️</h2>
                    <p className='fw-semibold'>Learn more with fun by <span style={{ color: "var(--primary-color)" }}>Quizine</span></p>
                </div>
            </div>

            {/* blog posts */}
            <div className='blog-posts'>
                <div>
                    {
                        blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;
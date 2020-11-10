import React from 'react';
import './BlogDetails.css';

function BlogDetails({ blog }) {

    return (
        <div className="blogDetails">
            <div className="blogDetails__main">
                <h1>{blog.title}</h1>
                <p className="blogDetails__date"><span>{blog.date}</span> <span>Published By: {blog.author}</span></p>
                <br />
                <img src={'../' + blog.img} alt={blog.title} />
                <br />
                <br />
                <div className="blogDetails__desc">
                    <p>{blog.desc}</p>
                </div>
            </div>
            <h5>#{blog.type}</h5>
        </div>
    )
}

export default BlogDetails

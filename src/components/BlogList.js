import React from 'react';
import StoryCard from '../assesories/StoryCard';
import './BlogList.css';
import {data} from '../data';

function BlogList() {
    return (
        <div className="blogList">
            <h1>Super Blogs</h1>
            <div className="blogList__main">
            {
                    data.map((data,i) => {
                        return <StoryCard
                            id={data['id']}
                            date={data['date']}
                            image={data['img']}
                            title={data['title']}
                            type={data['type']}
                            key={i}
                        />
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogList 

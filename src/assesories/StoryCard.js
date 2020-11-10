import React from 'react';
import './StoryCard.css';
import {Link} from 'react-router-dom';

function StoryCard({id, image, type, date, title }) {
    return (
        <div className="storyCard">
            <div className="storyCard__imgContainer">
            <Link to={"/blogs/"+id}><img src={image} alt='i am happy'/></Link>
            </div>
            <div className="storyCard__mid">
                <p><strong>{type}</strong></p>
                <p className="storyCard__date">{date}</p>
            </div>
            <Link to={"/blogs/"+id}><h1>{title}</h1></Link>
        </div>
    )
}

export default StoryCard

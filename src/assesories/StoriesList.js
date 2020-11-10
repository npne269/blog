import React from 'react';
import './StoriesList.css';
import StoryCard from './StoryCard';
import {data} from '../data';

function StoriesList() {
    return (
        <div className="storiesList">
            <h1>Stories list</h1>
            <div className="storiesList__stories">
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
            <h4>See all posts...</h4>
        </div>
    )
}

export default StoriesList

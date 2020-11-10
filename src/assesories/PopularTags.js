import React from 'react'
import './PopularTags.css';
import TrendingCard from './TrendingCard';

function PopularTags() {
    const data = [1,2,3,4,5]
    return (
        <div className="popularTags">
            <h1>Trending Tags</h1>
            <div className="popularTags__container">
            {
                    data.map((d)=><TrendingCard title='nature' count={d}/>)
                }
            </div>
        </div>
    )
}

export default PopularTags

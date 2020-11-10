import React from 'react'
import TrendingCard from '../assesories/TrendingCard';
import './AllTags.css';

function AllTags() {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="allTags">
            <h1> All Tags</h1>
            <div className="allTags__list">
                {
                    data.map((d)=><TrendingCard title='nature' count={d}/>)
                }
                
            </div>
        </div>
    )
}

export default AllTags

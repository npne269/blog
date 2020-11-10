import React from 'react';
import './TrendingCard.css';

function TrendingCard({ title, count }) {
    return (
        <div className="trendingCard">
            <img src="images/pasta-1.jpg" alt="food" />
            <div className="trendingCard__desc">
                <p>#{title}</p>
                <span><strong>{count}</strong></span>
            </div>
        </div>
    )
}

export default TrendingCard

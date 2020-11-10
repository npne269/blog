import React from 'react';
import Highlights from '../assesories/Highlights';
import PopularTags from '../assesories/PopularTags';
import StoriesList from '../assesories/StoriesList';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Highlights/>
            <StoriesList/>
            <PopularTags/>
        </div>
    )
}

export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import './Caurosel.css';

function Caurosel({
    id,title, date, author, image, type, desc
}) {
    return (
        <div className="caurosel">
            <img className="caurosel__img" src={image} alt="its lol" />
            <div className="caurosel__desc">
                <h5>{type}</h5>
                <Link to={"/blogs/"+id}><h1>{title}</h1></Link>
                <div className="caurosel__date">
                    <p>{date} , {author}</p>
                </div>
                <div className="caurosel__parag">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default Caurosel

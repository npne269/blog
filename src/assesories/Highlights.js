import React, { useState, useEffect } from 'react';
import './Highlights.css';
import Caurosel from '../assesories/Caurosel';
import { data } from '../data';
import { NavLink } from 'react-router-dom';

function Highlights() {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const length = data.length;
        const countCount = 
            setInterval(() => {
                console.log('I am hello ')
                setIndex(i => {
                    if (i >= (length - 1)) {
                        return 0;
                    } else {
                        return i + 1;
                    }
                })
            }, 5000);
        return ()=>clearInterval(countCount)
    }, []);
    return (
        <div className="highlights off">
                <h4>Highlights</h4>
                <Caurosel
                    id={data[index]['id']}
                    key={index}
                    title={data[index]['title']}
                    date={data[index]['date']}
                    author={data[index]['author']}
                    image={data[index]['img']}
                    type={data[index]['type']}
                    desc={data[index]['desc']}
                />
                <div className="highlights__cpoint">
                    {
                        data.map((data, i) => {
                            return <p key={i} className={i === index ? 'highlights__cpointactive' : ''}>{i + 1}</p>
                        })
                    }
                </div>
            </div>
    )
}

export default Highlights

import React from 'react';
import './Footer.css';

function Footer() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    
    return (
        <div className="footer">
            &#169;copyright {year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bhattrai corporation
        </div>
    )
}

export default Footer

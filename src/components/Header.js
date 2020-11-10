import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

function Header({ theme, handleTheme }) {

    const [mobNav, setMobNav] = useState(false);

    const handleMobNav = () => {
        setMobNav(!mobNav);
    }

    return (
        <div className="header">
            <div className="header__main">
                <div className="header__logo">
                    <h1>Bhattrai</h1>
                </div>
                <div className="header__middle">
                    <NavLink exact activeClassName="header__selected" to="/">Home</NavLink>
                    <NavLink activeClassName="header__selected" to="/tags">Tags</NavLink>
                    <NavLink activeClassName="header__selected" to="/blogs">Blogs</NavLink>
                    <NavLink activeClassName="header__selected" to="/addblog">AddBlog</NavLink>
                </div>
                <div className="header__last">
                    <div className="header__ctrlbtn">
                        {theme === 'lightTheme' ?
                            <WbSunnyIcon style={{ color: 'orange' }} onClick={handleTheme} /> :
                            <Brightness2Icon onClick={handleTheme} />}
                        <SearchIcon style={{ padding: '0px 10px' }} />
                    </div>
                    <div className="header__subsbtn">
                        <Button>Sign In</Button>
                        <Button>Subscribe</Button>
                    </div>
                    <div className="header__menuIcon">
                        {
                            mobNav ? <CloseIcon onClick={handleMobNav} /> : <MenuIcon onClick={handleMobNav} />
                        }
                    </div>
                </div>
            </div>
                <div className={mobNav ? "header__mobNav on" : "header__mobNav"}>
                    <NavLink onClick={handleMobNav} exact activeClassName="highlights__selected" to="/">Home</NavLink>
                    <NavLink onClick={handleMobNav} activeClassName="highlights__selected" to="/tags">Tags</NavLink>
                    <NavLink onClick={handleMobNav} activeClassName="highlights__selected" to="/blogs">Blogs</NavLink>
                    <NavLink onClick={handleMobNav} activeClassName="header__selected" to="/addblog">AddBlog</NavLink>
                    <Button>Sign In</Button>
                    <Button>Subscribe</Button>
                </div>

        </div>
    )
}

export default Header

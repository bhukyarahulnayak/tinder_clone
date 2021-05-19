import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontsize="large" className="header_icon"/>
            </IconButton>
            <img
                className="header_logo"
                src="https://img.pngio.com/this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771.png"
                alt="logo" background="white"
            />
            <IconButton>
            <ForumIcon fontsize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}
export default Header

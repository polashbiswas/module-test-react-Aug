import React from "react";
import bookmarkHome from '../images/bookmarkHome.png';
import groupHome from '../images/groupHome.png';
import home from '../images/home.png'
import notifiHome from '../images/notifiHome.png'
import './navigation.css';

const Navigation = () => {

    return(
        <div className="nav-container">
            <div>
                <h2 className="nav-brand">TravelMedia.in</h2>
            </div>
            <div className="nav-links">
                <img src={home} alt="homepic" />
                <img src={notifiHome} alt="homepic" />
                <img src={bookmarkHome} alt="homepic" />
                <img src={groupHome} alt="homepic" />
            </div>
        </div>
    )
}

export default Navigation;
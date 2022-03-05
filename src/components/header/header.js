import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">
                    Star DB
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link  to="/people/1">People</Link>
                </li>
                <li>
                    <Link to="/planet/1">Planets</Link>
                </li>
                <li>
                    <Link to="/starship/5">Starships</Link>
                </li>
            </ul>


        </div>


    );
};

export default Header;

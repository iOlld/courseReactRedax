import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className="Header d-flex">
            <h3>
                <a href="#/Star DB">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#/People">People</a>
                </li>
                <li>
                    <a href="#/Planets">Planets</a>
                </li>
                <li>
                    <a href="#/Starships">Starships</a>
                </li>
                {/* <li>
                    <a href="#">Species</a>
                </li>
                <li>
                    <a href="#">Vehicles</a>
                </li>
                <li>
                    <a href="#">Films</a>
                </li> */}
            </ul>
        </div>
    );
};

export default Header;
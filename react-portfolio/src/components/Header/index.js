import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <h1>Micah Pellum</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="./About">About</Link>
                    </li>
                    <li>
                        <Link to="./Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="./Contact">Contact</Link>
                    </li>
                    <li>
                        <a href="/" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navigation.scss';

function Navigation() {
    return (
        <header className="header">
            <h1 className="index-link">
                <Link key="Matthew Yao" to="/">Matthew Yao</Link>
            </h1>
            <nav className="links">
                <ul>
                    <li key="About">
                        <Link to="/about">About</Link>
                    </li>
                    <li key="Projects">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;

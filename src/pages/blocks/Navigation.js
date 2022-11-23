import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../../css/Navigation.scss';

function Navigation() {
    const [expanded, setExpanded] = useState(false)

    return (
        <header className="header">
            <h2 className="index-link">
                <Link key="Matthew Yao" to="/">Matthew Yao</Link>
            </h2>
            <nav className="links">
                <ul>
                    <li key="About">
                        <Link to="/about">About</Link>
                    </li>
                    <li key="Publications">
                        <Link to="/Publications">Publications</Link>
                    </li>
                    <li key="Projects">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <nav className="navbar">
                <button onClick={() => {
                    setExpanded(!expanded)
                }}>
                    {expanded? <FontAwesomeIcon icon={faXmark} size="2x" beat />: <FontAwesomeIcon icon={faBars} size="2x" beat />}
                </button>
            </nav>
            <div className={expanded? "menu": "menu-closed"}>
                <ul>
                    <li key="About">
                        <Link onClick={() => {
                            setExpanded(!expanded)
                        }} to="/about">About</Link>
                    </li>
                    <li key="Publications">
                        <Link onClick={() => {
                            setExpanded(!expanded)
                        }} to="/Publications">Publications</Link>
                    </li>
                    <li key="Projects">
                        <Link onClick={() => {
                            setExpanded(!expanded)
                        }} to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
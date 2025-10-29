import React from "react";
import './Header.css';


export default function Header() {
    return (
        <header className="site-header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">About Us</li>
                </ul>
            </nav>
        </header>
    );
}
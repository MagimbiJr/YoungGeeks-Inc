import React from 'react';
import Content from '../Header/Content/Content';
import './Header.css'
const Header = props => (
    <header className="header">
        <div className="container">
        <nav className="navbar">
            <div className="logo">
                <a href="/">YoungGeeks</a>
            </div>
            <div className="flex_one"></div>
            <div className="navigations">
                <ul>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Templates</a>
                    </li>
                    <li>
                        <a href="/">Solutions</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <div className="nav_separator">
                        <li>
                            <a href="/" className="nav_btn">Log In</a>
                        </li>
                        <li>
                           <a href="/" className="nav_btn">14 Days Free Trial</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div>
                <button className="button" onClick={props.onDrawerClick}>
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
        <Content style={{marginTop: '50px'}} />
        </div>
    </header>
)

export default Header
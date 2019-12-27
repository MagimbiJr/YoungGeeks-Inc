import React from 'react';
import Toolbar from '../Header/Toolbar/Toolbar';
import Content from '../Header/Content/Content';
import './Header.css'
const Header = props => (
    <header className="header">
        <Toolbar />
        <div className="container">
            <Content style={{marginTop: '50px'}} />
        </div>
    </header>
)

export default Header
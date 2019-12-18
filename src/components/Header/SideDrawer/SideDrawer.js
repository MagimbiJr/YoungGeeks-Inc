import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'drawer_navs';
    if(props.show) {
        drawerClasses = 'drawer_navs open';
    }

    return (
    <div className={drawerClasses}>
        <div className="logo">
            <a href="/">YoungGeeks</a>
        </div>
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
            <hr className="drawer_navs_separator" />
            <li>
                <a href="/">Log In</a>
            </li>
            <li>
                <a href="/">14 Days Free Trial</a>
            </li>
        </ul>
    </div>
    )
}

export default SideDrawer
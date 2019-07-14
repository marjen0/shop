import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import TopMenu from './TopMenu/TopMenu';
import classes from './Menu.module.css';

const menu = (props) => {
    return (
        <div className={classes.Menu} >
            <SideMenu/>
            <TopMenu/>
        </div>
    );
}

export default menu
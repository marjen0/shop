import React from 'react';
import classes from './SideMenuToggle.module.css';
const sideMenuToggle = (props) => (
    <div style={{cursor:'pointer'}} className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideMenuToggle;
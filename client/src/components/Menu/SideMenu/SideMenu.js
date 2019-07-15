import React from 'react'
import SideMenuToggle from './SideMenuToggle/SideMenuToggle';
import arrowIcon from '../../../assets/icons/download.svg';
import classes from './SideMenu.module.css';

const sideMenu = (props) => {
    return (
        <div className={classes.SideMenu}>
            <div className={classes.Controls}>
                <SideMenuToggle/>
                <p>visos prekės</p>
                <img src={arrowIcon} alt='arrow icon'/>
            </div>
            g
        </div>
    );
}

export default sideMenu;
import React from 'react'
import SideMenuToggle from './SideMenuToggle/SideMenuToggle';
import arrowIcon from '../../../assets/icons/download.svg';
import SideMenuLinks from './SideMenuLinks/SideMenuLinks';
import classes from './SideMenu.module.css';

const sideMenu = (props) => {
    return (
        <div className={classes.SideMenu}>
            <div className={classes.Controls}>
                <SideMenuToggle/>
                <p>visos prekės</p>
                <img src={arrowIcon} alt='arrow icon'/>
            </div>
            <div>
                <SideMenuLinks categories={props.categories}/>
            </div>
            
        </div>
    );
}

export default sideMenu;
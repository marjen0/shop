import React from 'react'
import SideMenuToggle from './SideMenuToggle/SideMenuToggle';
import arrowIcon from '../../../assets/icons/download.svg';
import SideMenuLinks from './SideMenuLinks/SideMenuLinks';
import classes from './SideMenu.module.css';

const sideMenu = (props) => {
    //const sideLinks = props.show? <SideMenuLinks categories={props.categories}/> : null
    const sideLinks = <SideMenuLinks categories={props.categories}/>
    return (
        <div className={classes.SideMenu}>
            <div className={classes.Controls} onClick={props.toggleMenu}>
                <SideMenuToggle />
                <p>visos prekės</p>
                <img src={arrowIcon} alt='arrow icon'/>
            </div>
            <div className={classes.SideLinks}>
                {sideLinks}
            </div>
            
        </div>
    );
}

export default sideMenu;
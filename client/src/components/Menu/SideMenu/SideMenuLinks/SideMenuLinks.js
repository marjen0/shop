import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SideMenuLinks.module.css';

const sideMenuLinks = (props) => {

    const links = props.categories.map(link => {
        const capitalized = link.name.charAt(0).toUpperCase()+link.name.slice(1);
        const splittedLinkName = capitalized.replace('-', ' ');
        return (
            <li key={link._id}>
                <Link to={'/' + link.name} >{splittedLinkName}</Link>
            </li>
        );      
    }); 
    
    return (
        <div className={classes.Links}>
            <ul>
                {links}
                <li>
                    <Link to='/visos-prekes' >Visos prekės</Link>
                </li>
            </ul>
        </div>
    );
}

 export default sideMenuLinks;
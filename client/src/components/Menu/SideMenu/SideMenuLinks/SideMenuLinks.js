import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SideMenuLinks.module.css';

 const sideMenuLinks = (props) => {
     const links = props.categories.map(link => {
        const capitalized = link.name.charAt(0).toUpperCase()+link.name.slice(1);
        const splittedLinkName = capitalized.replace('-', ' ');
        return (
            <li>
                <Link to={'/' + link.name} key={link._id}>{splittedLinkName}</Link>
            </li>
        );      
    }); 
    //console.log(props);
    return (
        <div className={classes.Links}>
            <ul>
                {links}
            </ul>
        </div>
    );
 }

 export default sideMenuLinks;
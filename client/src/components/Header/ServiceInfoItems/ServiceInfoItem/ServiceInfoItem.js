import React from 'react'
import classes from './ServiceInfoItem.module.css';

const serviceInfoItem = (props) => {
    return(
        <li className={classes.ServiceInfoItem}>
            <a href={props.linkTo}>   
                {props.children}
            </a>
        </li>
    );
}

export default serviceInfoItem;
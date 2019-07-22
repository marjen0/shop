import React from 'react'
import classes from './UserLink.module.css';
import { Link } from 'react-router-dom';

const userLink = (props) => {
    const icon = props.icon? <img className={classes.Icon} src={props.icon} alt='icon'/>:null
    const link = props.to? <Link to={props.to}>{props.children}</Link> : <div>{props.children}</div>
    return (
        <div className={classes.Wrapper}>
            {icon}
            {link}
        </div>
    );
}


export default userLink;
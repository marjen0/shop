import React from 'react'
import classes from './UserLink.module.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const userLink = (props) => {
    const icon = props.icon? <img className={classes.Icon} src={props.icon} alt='icon'/>:null
    const link = props.to? <Link to={props.to}>{props.children}</Link> : <p>{props.children}</p>
    return (
        <div className={classes.Wrapper}>
            {icon}
            {link}
        </div>
    );
}

userLink.propTypes = {
    icon: PropTypes.string.isRequired
}

export default userLink;
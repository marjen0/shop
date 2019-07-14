import React from 'react'
import classes from './UserLink.module.css';

import PropTypes from 'prop-types';

const userLink = (props) => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.Icon} src={props.icon} alt='icon'/>
            <p>{props.children}</p>
        </div>
    );
}

userLink.propTypes = {
    icon: PropTypes.string.isRequired
}

export default userLink;
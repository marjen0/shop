import React from 'react'
import classes from './Category.module.css';

const category = (props) => {
    return (
        <div className={classes.Category}>
            {props.children}
        </div>
    );
}

export default category;
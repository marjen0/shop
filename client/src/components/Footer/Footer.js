import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => {
    return (
        <div className={classes.Footer}>
            <p>Copyright &copy; Marijus Jenulis {new Date().getFullYear()} </p>
        </div>
    );
}

export default footer;
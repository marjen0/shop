import React from 'react';
import classes from './Logo.module.css';
import logoPic from '../../../assets/images/logo.png';

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={logoPic} alt='logo'/>
            {props.text
                ? 
                <div className={classes.LogoText}>
                    <p>brangu.lt</p>
                    <p>viskas, ko norisi</p>
                </div>
                : null
            }
        </div>
    );
}

export default logo;
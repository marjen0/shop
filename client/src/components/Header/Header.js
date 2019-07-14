import React from 'react';

import ServiceInfoItems from './ServiceInfoItems/ServiceInfoItems';
import Logo from '../Logo/Logo';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo text={true}/>
            <ServiceInfoItems/>
        </div>
    );
}

export default header;
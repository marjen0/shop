import React from 'react';

import ServiceInfoItems from './ServiceInfoItems/ServiceInfoItems';
import Logo from '../UI/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import UserLinks from './UserLinks/UserLinks';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo text={true}/>
            <div className={classes.FlexContainer}>
                <ServiceInfoItems/>
                <div className={classes.HorizontalFlex}>
                    <SearchBar productCount={5645}/>
                    <UserLinks/>
                </div>        
            </div>
            
        </div>
    );
}

export default header;
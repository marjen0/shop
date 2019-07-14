import React from 'react';
import classes from './UserLinks.module.css';
import UserLink from './UserLink/UserLink';
import userIcon from '../../../assets/icons/male-user-shadow.svg';
import heartIcon from '../../../assets/icons/favorite-heart-button.svg';
import cartIcon from '../../../assets/icons/shopping-cart.svg';

const userLinks = (props) => {
    return (
        <div className={classes.UserLinks}>
            <UserLink icon={userIcon}>Prisijungti Registruotis</UserLink>
            <UserLink icon={heartIcon}>Patikusios prekės</UserLink>
            <UserLink icon={cartIcon}>Prekių krepšelis</UserLink>
        </div>
    );
}

export default userLinks;
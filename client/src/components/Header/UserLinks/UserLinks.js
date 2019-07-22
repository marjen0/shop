import React from 'react';
import classes from './UserLinks.module.css';
import UserLink from './UserLink/UserLink';
import userIcon from '../../../assets/icons/male-user-shadow.svg';
import heartIcon from '../../../assets/icons/favorite-heart-button.svg';
import cartIcon from '../../../assets/icons/shopping-cart.svg';

const userLinks = (props) => {
    return (
        <div className={classes.UserLinks}>
            <UserLink icon={userIcon}>
                Prisijungti Registruotis
                <div className={classes.Auth}>
                    <p>Sveiki atvykę į Brangu.lt</p>
                    <UserLink to='/prisijungti'>Prisijungti</UserLink>
                    <hr/>
                    <p>Neturite paskyros? </p>
                    <UserLink to='/registracija'>Registruotis</UserLink>
                    <p>Registruotiems vartotojams grįžta 0,5% pirkinių vertės</p>
                </div>
            </UserLink>
            <UserLink to='/patikusios-prekes' icon={heartIcon}>Patikusios prekės</UserLink>
            <UserLink to='/krepselis' icon={cartIcon}>Prekių krepšelis</UserLink>
        </div>
    );
}

export default userLinks;
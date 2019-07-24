import React from 'react';
import { connect } from 'react-redux';
import classes from './UserLinks.module.css';
import UserLink from './UserLink/UserLink';
import userIcon from '../../../assets/icons/male-user-shadow.svg';
import heartIcon from '../../../assets/icons/favorite-heart-button.svg';
import cartIcon from '../../../assets/icons/shopping-cart.svg';


class UserLinks extends React.Component {
    render(){
        let authLink = this.props.user
            ? (
                <UserLink icon={userIcon} to='/profilis'>
                    Profilis
                </UserLink>
            ) :
            (
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
            );
        return (
            <div className={classes.UserLinks}>
                {authLink}
                <UserLink to='/patikusios-prekes' icon={heartIcon}>Patikusios prekės</UserLink>
                <UserLink to='/krepselis' icon={cartIcon}>Prekių krepšelis</UserLink>
            </div>
        );
    }
    
}
const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(UserLinks);
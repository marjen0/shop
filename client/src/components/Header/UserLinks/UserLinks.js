import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import classes from './UserLinks.module.css';
import UserLink from './UserLink/UserLink';
import Wishlist from './Wishlist/Wishlist';
import userIcon from '../../../assets/icons/male-user-shadow.svg';
import heartIcon from '../../../assets/icons/favorite-heart-button.svg';
import cartIcon from '../../../assets/icons/shopping-cart.svg';


class UserLinks extends React.Component {

    remove = (e,id) => {
        e.preventDefault();
        this.props.remove(id);
    }

    render(){
        const { wishlist } = this.props;
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
        let wishlistCounter = wishlist? wishlist.length : 0
        return (
            <div className={classes.UserLinks}>
                {authLink}
                <UserLink icon={heartIcon}> 
                    <span className={classes.list}>Patikusios prkės (<span style={{color:'red'}}>{wishlistCounter}</span>)
                        <div className={classes.Wishlist}>
                            <Wishlist 
                                wishlist={this.props.wishlist}
                                remove={this.remove}
                            />
                        </div> 
                    </span>
                </UserLink>
                
                <UserLink to='/krepselis' icon={cartIcon}>Prekių krepšelis</UserLink>
            </div>
        );
    }
    
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        wishlist: state.items.wishlist
    }
}
const mapDispatchToProps = dispatch => {
    return {
        remove: (id) => dispatch(actions.removeFromWishlist(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLinks);
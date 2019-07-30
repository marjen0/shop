import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import classes from './UserLinks.module.css';
import UserLink from './UserLink/UserLink';
import ItemSummary from './ItemSummary/ItemSummary';
import EmptyList from './EmptyList/EmptyList';
import userIcon from '../../../assets/icons/male-user-shadow.svg';
import heartIcon from '../../../assets/icons/favorite-heart-button.svg';
import cartIcon from '../../../assets/icons/shopping-cart.svg';


class UserLinks extends React.Component {

    remove = (e,id) => {
        e.preventDefault();
        this.props.remove(id);
    }
    removeFromCart = (e,id) => {
        e.preventDefault();
        this.props.removeFromCart(id);
    }
    addToCart = (e,item) => {
        e.preventDefault();
        this.props.addToCart(item);
    }

    render(){
        const { wishlist,cart,user } = this.props;
        let authLink = this.props.user
            ? (
                <UserLink icon={userIcon}>
                    <span className={classes.authLinks}>Profilis
                        <div className={classes.Profile}>
                            <UserLink to={`/${user.user._id}/uzsakymai`}>Mano užsakymai</UserLink>
                        </div>
                    </span>
                </UserLink>
            ) :
            (
                <UserLink icon={userIcon}>
                    <span className={classes.authLinks}>Prisijungti Registruotis
                        <div className={classes.Auth}>
                            <p>Sveiki atvykę į Brangu.lt</p>
                            <UserLink to='/prisijungti'>Prisijungti</UserLink>
                            <hr/>
                            <p>Neturite paskyros? </p>
                            <UserLink to='/registracija'>Registruotis</UserLink>
                            <p>Registruotiems vartotojams grįžta 0,5% pirkinių vertės</p>
                        </div>
                    </span>
                </UserLink>
            );
        let wishlistCounter = wishlist? wishlist.length : 0
        let cartCounter = cart? cart.length : 0
        return (
            <div className={classes.UserLinks}>
                {authLink}
                <UserLink icon={heartIcon}> 
                    <span className={classes.list}>Patikusios prkės (<span style={{color:'red'}}>{wishlistCounter}</span>)
                        <div className={classes.Wishlist}>
                            <EmptyList wishlist={this.props.wishlist}/>
                            <ItemSummary
                                link={'/patikusios-prekes'}
                                items={this.props.wishlist}
                                remove={this.remove}
                                wishlist={true}
                            />
                        </div> 
                    </span>
                </UserLink>
                
                <UserLink icon={cartIcon}> 
                    <span className={classes.cart}>Prekių krepšelis (<span style={{color:'red'}}>{cartCounter}</span>)
                        <div className={classes.Wishlist}>
                            <EmptyList cart={this.props.cart}/>
                            <ItemSummary
                                link='/prekiu-krepselis'
                                items={this.props.cart}
                                remove={this.removeFromCart}
                                wishlist={false}
                            />
                        </div> 
                    </span>
                </UserLink>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        wishlist: state.items.wishlist,
        cart: state.items.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        remove: (id) => dispatch(actions.removeFromWishlist(id)),
        removeFromCart: (id) => dispatch(actions.removeFromCart(id)),
        addToCart: (item) => dispatch(actions.addToCart(item)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLinks);
import React from 'react';
import banner from '../../assets/images/banner.jpg';
import Category from '../../components/UI/Category/Category';
import Item from '../../components/Item/Item';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './Home.module.css';

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchPopularItems();
    }
    render() { 
        let items = <Spinner/>
        if (this.props.items) {
            items = this.props.items.map(item => (
                <Item key={item._id} item={item}/>
            ));
        }
        return (
            <React.Fragment>
                <img style={{width:'100%'}} src={banner} alt='banner'/>
                <Category>
                    populiariausios prekės
                </Category>
                <div className={classes.ItemsWrapper}>
                    {items}
                </div>
            </React.Fragment>
            
        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.items.items,
        error: state.items.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPopularItems: () => dispatch(actions.fetchAllItems('?limit=4'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
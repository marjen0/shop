import React from 'react';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import Item from '../../components/Item/Item';
import Category from '../../components/UI/Category/Category';
import Spinner from '../../components/UI/Spinner/Spinner';
import PropTypes from 'prop-types';
import classes from './Items.module.css';


class Items extends React.Component {
    replaceLetter = (word) => {
        const lith = ['ą','č','ę','ė','į','š','ų','ū'];
        const repl = ['a','c','e','e','i','s','u','u'];
        const wordArr = [...word];
        let newWord = word;
        wordArr.forEach((letter) => {
            lith.find(x => {
                if (x === letter) {
                    let indexInLith = lith.indexOf(x);
                    newWord = newWord.replace(letter, repl[indexInLith]);
                }
                return null;
            });       
        });
        return newWord;
    }
    componentDidMount() {
        const paramsCategory = this.props.match.params.category
        if (paramsCategory) {
            const category = this.replaceLetter(paramsCategory);
            this.props.fetchItems(category);
        }
    }
    render() {
        const category = this.props.match.params.category;
        const displayCategory = category.charAt(0).toUpperCase()+category.slice(1).replace('-', ' ');

        let items = this.props.isLoading
            ? <Spinner/>
            : this.props.items.map(item => (
                <Item key={item._id} item={item}/>
            ))
        
        return(
            <React.Fragment>
                <Category>
                    {displayCategory}
                </Category>
                <div className={classes.Wrapper}>
                    {items}
                </div>
            </React.Fragment>
        );
    }
}
Item.propTypes = {
    items: PropTypes.array.isRequired,
}
const mapStateToProps = state => {
    return {
        items: state.items.items,
        isLoading: state.items.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (category) => dispatch(actions.fetchItems(category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Items);
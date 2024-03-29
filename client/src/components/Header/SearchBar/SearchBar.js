import React from 'react';
import searchIcon from '../../../assets/icons/search-white.svg';
import classes from './SearchBar.module.css';

class SearchBar extends React.Component  {
    render(){
        return (
            <form className={classes.SearchBar}>
                <input type='text' placeholder={'Ieškokite tarp ' + this.props.itemsCount + ' prekių'}/>
                <button>{<img style={{height: '20px', width: 'auto'}} src={searchIcon} alt='searc icon'/>}</button>
            </form>
        );
    } 
}

export default SearchBar;
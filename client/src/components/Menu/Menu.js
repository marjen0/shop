import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import TopMenu from './TopMenu/TopMenu';
import classes from './Menu.module.css';

class Menu extends React.Component {
    
    render() {
        return (
            <div className={classes.Menu} >
                <SideMenu 
                    categories={this.props.categories}
                    toggleMenu={this.props.toggleMenu}
                    show={this.props.show}
                />
                <TopMenu/>
            </div>
        );
    }
    
}

export default Menu;
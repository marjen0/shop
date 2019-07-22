import React from 'react';

import ServiceInfoItems from './ServiceInfoItems/ServiceInfoItems';
import Logo from '../UI/Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import UserLinks from './UserLinks/UserLinks';
import Modal from '../UI/Modal/Modal';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo text={true}/>
            <div className={classes.FlexContainer}>
                <ServiceInfoItems/>
                <div className={classes.HorizontalFlex}>
                    <SearchBar productCount={5645}/>
                    <UserLinks toggleModal={props.toggleModal}/>
                    <Modal show={props.showModal} toggleModal={props.toggleModal}>
                        <button onClick={props.toggleModal} className={classes.CloseModal}>x</button>
                        <div>
                            Hey there
                        </div>  
                    </Modal>
                </div>        
            </div>
            
        </div>
    );
}

export default header;
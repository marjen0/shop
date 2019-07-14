import React from 'react';
import ServiceInfoItem from './ServiceInfoItem/ServiceInfoItem';
import classes from './ServiceInfoItems.module.css';

const serviceInfoItems = (props) => {
    return(
        <ul className={classes.ServiceInfoItems}>
            <span className={classes.Number}>Konsultuojame visą parą: +370 661 05555 arba:</span> <ServiceInfoItem linkTo={'/'}>palikite pranešimą </ServiceInfoItem>
            <ServiceInfoItem linkTo={'/'}>Informacija apie užsakymą</ServiceInfoItem>
            <ServiceInfoItem linkTo={'/'}>Pristatymas</ServiceInfoItem>
            <ServiceInfoItem linkTo={'/'}>Pirkimo Informacija</ServiceInfoItem>
            <ServiceInfoItem linkTo={'/'}>Taisykles </ServiceInfoItem>
        </ul>
    );
}

export default serviceInfoItems;
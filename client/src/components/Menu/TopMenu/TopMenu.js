import React from 'react'
import classes from './TopMenu.module.css';
import discountIcon from '../../../assets/icons/discount-label-for-commerce.svg';

const topMenu = (props) => {
    return (
        <div className={classes.TopMenu}>
            <ul>
                <li>
                    <a href='/' className={classes.DiscountLink}>
                        <img src={discountIcon}/>
                        Akcijos
                    </a>
                </li>
                <li>
                    <a href='/'>Išparduotuvė</a>
                </li>
                <li>
                    <a href='/'>Baldai</a>
                </li>
                <li>
                    <a href='/'>Kvepalai</a>
                </li>
                <li>
                    <a href='/'>Žaislai</a>
                </li>
            </ul>
        </div>
    );
}

export default topMenu;
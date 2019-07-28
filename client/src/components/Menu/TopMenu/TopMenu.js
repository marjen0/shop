import React from 'react'
import { Link } from 'react-router-dom';
import classes from './TopMenu.module.css';
import discountIcon from '../../../assets/icons/discount-label-for-commerce.svg';

const topMenu = (props) => {
    return (
        <div className={classes.TopMenu}>
            <ul>
                <li>
                    <Link to='/akcijos' className={classes.DiscountLink}>
                        <img src={discountIcon} alt='discount icon'/>
                        Akcijos
                    </Link>
                </li>
                <li>
                    <Link to='/baldai'>Baldai</Link>
                </li>
                <li>
                    <Link to='/kvepalai'>Kvepalai</Link>
                </li>
                <li>
                    <Link to='/zaislai'>Žaislai</Link>
                </li>
            </ul>
        </div>
    );
}

export default topMenu;
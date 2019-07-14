import React from 'react'


const serviceInfoItem = (props) => {
    return(
        <li>
            <a href='/'>   
                {props.children}
            </a>
        </li>
    );
}

export default serviceInfoItem;
// import { useState } from 'react';
import './WishItem.css';
// import WishModal from '../ViewWish/WishModal';
// import Card from '../Card'

function WishItem(props) {
    return(
        <>
        <button className='wish-item' onClick={props.onClick}>
            <div className='wish-item__description'>
                <p>{props.brand}</p>
                <h2>
                {props.title}
                </h2>
                <h3 className='wish-item__price'>${props.price}</h3>
            </div>
        </button>
        </>
    )
};


export default WishItem;
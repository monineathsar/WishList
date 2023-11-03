import React, { useState } from 'react';
import './WishForm.css';

const WishForm = (props) => {
    const [enteredStore, setEnteredStore] = useState ('');
    const [enteredWish, setEnteredWish] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');

    const storeChangeHandler = (event) => {
        setEnteredStore(event.target.value);
    };

    const wishChangeHandler = (event) => {
        setEnteredWish(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const wishData = {
            store: enteredStore,
            title: enteredWish,
            price: +enteredPrice
        };

        props.onSaveWishData(wishData)
        setEnteredStore('');
        setEnteredWish('');
        setEnteredPrice('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-wish__controls'>
                <div className='new-wish__control'>
                    <label>Store</label>
                    <input type='text' value={enteredStore} onChange={storeChangeHandler}/>
                </div>
                <div className='new-wish__control'>
                    <label>Wish</label>
                    <input type='text' value={enteredWish} onChange={wishChangeHandler}/>
                </div>
                <div className='new-wish__control'>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler}/>
                </div>
            </div>
            <div className='new-wish__actions'>
                <button type='submit'>Add Wish</button>
            </div>
        </form>
    )
}

export default WishForm;
import React, { useState } from 'react';
import './WishForm.css';

const WishForm = (props) => {
    const [enteredBrand, setEnteredBrand] = useState('');
    const [enteredWish, setEnteredWish] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredSize, setEnteredSize] = useState('');
    const [enteredColor, setEnteredColor] = useState('');
    const [enteredUrl, setEnteredUrl] = useState('');

    const brandChangeHandler = (event) => {
        setEnteredBrand(event.target.value);
    };

    const wishChangeHandler = (event) => {
        setEnteredWish(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const sizeChangeHandler = (event) => {
        setEnteredSize(event.target.value);
    };

    const colorChangeHandler = (event) => {
        setEnteredColor(event.target.value);
    };

    const urlChangeHandler = (event) => {
        setEnteredUrl(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const wishData = {
            brand: enteredBrand,
            title: enteredWish,
            price: +enteredPrice
        };

        props.onSaveWishData(wishData)
        setEnteredBrand('');
        setEnteredWish('');
        setEnteredPrice('');
    };
    
    return (

        <form className='wishForm' onSubmit={submitHandler}>
            <div className='wishForm__controls'>
                <div className='wishForm__control'>
                    <label>Brand</label>
                    <input type='text' value={enteredBrand} onChange={brandChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Wish</label>
                    <input type='text' value={enteredWish} onChange={wishChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Size</label>
                    <input type="text" value={enteredSize} onChange={sizeChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Color</label>
                    <input type="text" value={enteredColor} onChange={colorChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>URL Link</label>
                    <input type="text" value={enteredUrl} onChange={urlChangeHandler} />
                </div>
                <div>
                    <button>Click to Shop</button>
                    <button className='wishForm__actions'>Move to 'Purchased'</button>
                </div>
            </div>
            <div className='wishForm__actions'>
                <button type='submit'>Add Wish</button>
                <button>Delete</button>
            </div>
        </form>
    );
};

export default WishForm;
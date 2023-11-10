import React, { useState } from 'react';
import './AddWishForm.css';

const AddWishForm = (props) => {
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
            price: +enteredPrice,
            size: enteredSize,
            color: enteredColor,
            url: enteredUrl
        };

        props.onSaveWishData(wishData)
        setEnteredBrand('');
        setEnteredWish('');
        setEnteredPrice('');
        setEnteredSize('');
        setEnteredColor('');
        setEnteredUrl('');
    };
    
    return (

        <form className='wishForm' onSubmit={submitHandler}>
            <div className='wishForm__controls'>
                <div className='wishForm__control'>
                    <input 
                    placeholder='Brand'
                    type='text' 
                    value={enteredBrand} 
                    onChange={brandChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <input 
                    placeholder='Wish'
                    type='text' 
                    value={enteredWish} 
                    onChange={wishChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <input 
                    placeholder='Price'
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredPrice} 
                    onChange={priceChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <input 
                    placeholder='Size'
                    type="text" 
                    value={enteredSize} 
                    onChange={sizeChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <input 
                    placeholder='Color'
                    type="text" 
                    value={enteredColor} 
                    onChange={colorChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <input 
                    placeholder='URL Link'
                    type="text" 
                    value={enteredUrl} 
                    onChange={urlChangeHandler} />
                </div>
            </div>
            <div className='wishForm__actions'>
                <button type='submit'>Add Wish</button>
            </div>
        </form>
    );
};

export default AddWishForm;
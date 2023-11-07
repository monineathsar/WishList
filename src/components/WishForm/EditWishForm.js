import React, { useState } from 'react';
import './EditWishForm.css';

const EditWishForm = (props) => {
    const id = props.wishItem.id;
    const [brand, setBrand] = useState(props.wishItem.brand);
    const [wishTitle, setWishTitle] = useState(props.wishItem.title);
    const [price, setPrice] = useState(props.wishItem.price);
    const [size, setSize] = useState(props.wishItem.size);
    const [color, setColor] = useState(props.wishItem.color);
    const [urlLink, setUrlLink] = useState(props.wishItem.url);

    const brandChangeHandler = (event) => {
        setBrand(event.target.value);
    };

    const wishChangeHandler = (event) => {
        setWishTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    };

    const sizeChangeHandler = (event) => {
        setSize(event.target.value);
    };

    const colorChangeHandler = (event) => {
        setColor(event.target.value);
    };

    const urlChangeHandler = (event) => {
        setUrlLink(event.target.value);
    };

    const updateHandler = (event) => {
        event.preventDefault();

        const updatedWishData = {
            id: id,
            brand: brand,
            title: wishTitle,
            price: +price,
            size: size,
            color: color,
            url: urlLink
        };

        props.onUpdateWishData(id, updatedWishData)
        setBrand('');
        setWishTitle('');
        setPrice('');
    };
    
    return (

        <form className='wishForm' onSubmit={updateHandler}>
            <div className='wishForm__controls'>
                <div className='wishForm__control'>
                    <label>Brand</label>
                    <input 
                    type='text' 
                    name='brand'
                    value={brand} 
                    onChange={brandChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Wish</label>
                    <input 
                    type='text' 
                    name='title'
                    value={wishTitle} 
                    onChange={wishChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Price</label>
                    <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    name='price'
                    value={price} 
                    onChange={priceChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Size</label>
                    <input 
                    type="text" 
                    name='size'
                    value={size} 
                    onChange={sizeChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>Color</label>
                    <input 
                    type="text" 
                    name='color'
                    value={color} 
                    onChange={colorChangeHandler} />
                </div>
                <div className='wishForm__control'>
                    <label>URL Link</label>
                    <input 
                    type="text" 
                    name='url'
                    value={urlLink} 
                    onChange={urlChangeHandler} />
                </div>
                <div>
                    <button>Click to Shop</button>
                    <button className='wishForm__actions'>Move to 'Purchased'</button>
                </div>
            </div>
            <div className='wishForm__actions'>
                <button type='submit'>Update Wish</button>
                <button>Delete</button>
            </div>
        </form>
    );
};

export default EditWishForm;
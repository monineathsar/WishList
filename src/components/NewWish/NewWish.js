import './NewWish.css';

import WishForm from './WishForm';

const NewWish = (props) => {
    const saveWishDataHandler = (enteredWishData) => {
        const wishData = {
            ...enteredWishData,
            id: Math.random().toString()
        };
        props.onAddWish(wishData);
    };

    return (
        <div className='new-wish'>
            <WishForm onSaveWishData={saveWishDataHandler}/>
        </div>
    );
};

export default NewWish;
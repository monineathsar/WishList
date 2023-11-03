import './WishItem.css';
// import Card from '../Card'

function WishItem(props) {
    const viewWishItem = (event) => {
        console.log('clicked!')
    }

    return(
        <button className='wish-item' onClick={viewWishItem}>
            <div className='wish-item__description'>
                <p>{props.brand}</p>
                <h2>
                {props.title}
                </h2>
                <h3 className='wish-item__price'>${props.price}</h3>
            </div>
        </button>
    )
};


export default WishItem;
import './WishItem.css';

function WishItem(props) {
    
    return(
        <div className='wish-item'>
            <div className='wish-item__description'>
                <p>{props.store}</p>
                <h2>
                {props.title}
                </h2>
                <h3>${props.price}</h3>
            </div>
            <div className='wish-item__buy'>
                Buy
            </div>
        </div>
    )
}

export default WishItem;
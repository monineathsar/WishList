import './WishItem.css';

function WishItem() {
    return(
        <div className='wish-item'>
            <div className='wish-item__description'>
                <h2>
                Marc Jacobs Medium Tote Bag
                </h2>
                <p>Nordstrom</p>
                <h3>$175</h3>
            </div>
            <div className='wish-item__buy'>
                Buy
            </div>
        </div>
    )
}

export default WishItem;
import './WishItem.css';
// import Card from '../Card'

function WishItem(props) {
    
    return(
        <button className='wish-item' >
            <div className='wish-item__description'>
                <p>{props.store}</p>
                <h2>
                {props.title}
                </h2>
                <h3 className='wish-item__price'>${props.price}</h3>
            </div>
        </button>
        
    )
};


export default WishItem;
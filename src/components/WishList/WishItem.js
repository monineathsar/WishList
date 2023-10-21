import './WishItem.css';
import Card from '../Card'

function WishItem(props) {
    
    return(
        <Card className='wish-item'>
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
        </Card>
    )
}

export default WishItem;
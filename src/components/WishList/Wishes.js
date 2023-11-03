import WishItem from './WishItem';
import './Wishes.css'
import Card from '../Card';

function Wishes(props) {
    return (
        <Card className='wishes'>
            <h4>Recent Wishes</h4>
            {props.items.map((wish) => (
                <WishItem 
                key={wish.id}
                brand={wish.brand} 
                title={wish.title}
                price={wish.price}
                />
            ))}
        </Card>
    )
}

export default Wishes;
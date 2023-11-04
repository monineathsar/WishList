import WishItem from './WishItem';
import './Wishes.css'
import Card from '../Card';

function Wishes({items, onClick}) {
    return (
        <Card className='wishes'>
            <h4>Recent Wishes</h4>
            {items.map((wish) => (
                <WishItem 
                key={wish.id}
                brand={wish.brand} 
                title={wish.title}
                price={wish.price}
                onClick={onClick}
                />
            ))}
        </Card>
    )
}

export default Wishes;
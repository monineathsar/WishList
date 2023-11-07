import WishItem from './WishItem';
import './Wishes.css'
import Card from '../Card';

const Wishes = (props) => {
    return (
        <Card className='wishes'>
            <h4>Recent Wishes</h4>
            {props.items.map((wish) => (
                <WishItem 
                key={wish.id}
                id={wish.id}
                brand={wish.brand} 
                title={wish.title}
                price={wish.price}
                viewEdit={props.viewEdit}
                />
            ))}
        </Card>
    )
}

export default Wishes;
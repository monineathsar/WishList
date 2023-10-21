import WishItem from './WishItem';
import './Wishes.css'
import Card from '../Card';

function Wishes(props) {
    return (
        <Card className='wishes'>
            <WishItem
                title={props.items[0].title}
                store={props.items[0].store}
                price={props.items[0].price}
            ></WishItem>
            <WishItem
                title={props.items[1].title}
                store={props.items[1].store}
                price={props.items[1].price}
            ></WishItem>
            <WishItem
                title={props.items[2].title}
                store={props.items[2].store}
                price={props.items[2].price}
            ></WishItem>
            <WishItem
                title={props.items[3].title}
                store={props.items[3].store}
                price={props.items[3].price}
            ></WishItem>
        </Card>
    )
}

export default Wishes;
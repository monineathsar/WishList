import WishItem from './WishItem';
import './Wishes.css'

function Wishes(props) {
    return (
        <div className='wishes'>
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
        </div>
    )
}

export default Wishes;
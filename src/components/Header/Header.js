import './Header.css';
import Card from '../Card';

function Header(props) {

    return (
        <Card className='header'>
            <h2>Wish List</h2>
            <div className='header_searchBar'>
                <label>Search Wish: </label>
                <input type="text"></input>
            </div>
            <div className='header__actions'>
                <button onClick={props.onClick}>+</button>
            </div>
        </Card>
    )
};

export default Header;
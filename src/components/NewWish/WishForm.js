import './WishForm.css';

const WishForm = () => {
    return (
        <form>
            <div className='new-wish__controls'>
                <div className='new-wish__control'>
                    <label>Store</label>
                    <input type='text' />
                </div>
                <div className='new-wish__control'>
                    <label>Item</label>
                    <input type='text' />
                </div>
                <div className='new-wish__control'>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
            </div>
            <div className='new-wish__actions'>
                <button type='submit'>Add Wish</button>
            </div>
        </form>
    )
}

export default WishForm;
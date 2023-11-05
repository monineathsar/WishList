import './WishFormModal.css';
import Card from "../Card";
import WishForm from './WishForm';

function WishModal({ open, onClose, submitForm }) {
    if (!open) return null;

    const saveWishDataHandler = (enteredWishData) => {
        const wishData = {
            ...enteredWishData,
            id: Math.random().toString()
        };
        submitForm(wishData);
    };
    

    return (
        <Card className='wishForm'>
            <p className="closeBtn" onClick={onClose}>[X]</p>
            <WishForm onSaveWishData={saveWishDataHandler}/>
        </Card>

    );
}

export default WishModal;
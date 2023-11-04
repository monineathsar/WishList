import './WishModal.css';
import Card from "../Card";
import WishForm from '../NewWish/WishForm';

function WishModal({ open, onClose }) {
    if (!open) return null;
    return (
        <Card className="modal-overlay">
            <p className="closeBtn" onClick={onClose}>X</p>
            <WishForm />
            <div className='new-wish__actions'>
                <button type='submit'>Update</button>
                <button>Delete</button>
                <button>Shop</button>
            </div>
        </Card>

    );
}

export default WishModal;
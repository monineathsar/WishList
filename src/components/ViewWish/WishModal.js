import './WishModal.css';
import Card from "../Card";
import WishForm from '../NewWish/WishForm';

function WishModal({ open, onClose }) {
    if (!open) return null;
    return (
        <Card className='wishForm'>
            <p className="closeBtn" onClick={onClose}>[X]</p>
            <WishForm />
        </Card>

    );
}

export default WishModal;
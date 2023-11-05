import './AddWishModal.css';
import Card from "../../Card";
import AddWishForm from '../AddWishForm';

function AddWishModal({ open, onClose, submitForm }) {
    if (open !== "ADD") return null;

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
            <AddWishForm onSaveWishData={saveWishDataHandler}/>
        </Card>

    );
}

export default AddWishModal;
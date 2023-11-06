import './WishModal.css';
import Card from "../../Card";
import WishForm from '../EditWishForm';

function EditWishForm({ open, onClose, submitForm }) {
    if (open !== "EDIT") return null;

    const saveWishDataHandler = (enteredWishData) => {
        const wishData = {
            ...enteredWishData,
            id: Math.random().toString()
        };
        submitForm(wishData);
    };


    return (
        <Card className='wishForm'>
            <div className='wishForm_titleBox'>
                <h2>Edit Wish</h2>
                <p className="closeBtn" onClick={onClose}>[X]</p>
            </div>
            <WishForm onSaveWishData={saveWishDataHandler} />
        </Card>

    );
}

export default EditWishForm;
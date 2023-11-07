import './WishModal.css';
import Card from "../../Card";
import AddWishForm from '../AddWishForm';

const AddWishModal = (props) => {
    if (props.open !== "ADD") return null;

    const saveWishDataHandler = (enteredWishData) => {
        const wishData = {
            ...enteredWishData,
            id: Math.random().toString()
        };
        props.submitForm(wishData);
    };


    return (
        <Card className='wishForm'>
            <div className='wishForm_titleBox'>
                <h2>New Wish</h2>
                <p className="closeBtn" onClick={props.onClose}>[X]</p>
            </div>
            <AddWishForm onSaveWishData={saveWishDataHandler} />
        </Card>

    );
}

export default AddWishModal;
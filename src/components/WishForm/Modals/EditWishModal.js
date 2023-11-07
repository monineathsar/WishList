import './WishModal.css';
import Card from "../../Card";
import WishForm from '../EditWishForm';

const EditWishForm = (props) => {
    if (props.open !== "EDIT") return null;

    const saveUpdatedWishHandler = (id, updatedWish) => {
        const updatedWishData = {
            ...updatedWish
        };
        props.submitForm(updatedWishData);
    };


    return (
        <Card className='wishForm'>
            <div className='wishForm_titleBox'>
                <h2>Edit Wish</h2>
                <p className="closeBtn" onClick={props.onClose}>[X]</p>
            </div>
            <WishForm wishItem={props.wish} onUpdateWishData={saveUpdatedWishHandler} />
        </Card>

    );
}

export default EditWishForm;
import './WishModal.css';
import Card from "../../Card";
import WishForm from '../EditWishForm';

const EditWishForm = (props) => {
    if (props.open !== "EDIT") return null;

    const updatedWishHandler = (updatedWish) => {

        const updatedWishData = {
            ...updatedWish
        };
        props.updateForm(updatedWishData);
    };


    return (
        <Card className='wishForm'>
            <div className='wishForm_titleBox'>
                <h2>Edit Wish</h2>
                <p className="closeBtn" onClick={props.onClose}>[X]</p>
            </div>
            <WishForm wishItem={props.wish} onUpdateWishData={updatedWishHandler} />
        </Card>

    );
}

export default EditWishForm;
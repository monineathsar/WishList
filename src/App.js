import React, { useState } from 'react';
import './App.css';

import Wishes from './components/WishList/Wishes'
import AddWishModal from './components/WishForm/Modals/AddWishModal'
import EditWishModal from './components/WishForm/Modals/EditWishModal';
import Header from './components/Header/Header';

import DUMMY_WISH from './seed/seedData.json';

function App() {
  const [ wishes, setWishes ] = useState(DUMMY_WISH);
  const [ editWish, setEditWish] = useState({})
  const [openModal, setOpenModal] = useState("");

  const viewEditWishFormModal = (wishId) => {
    setOpenModal("EDIT");
    setEditWish(wishes.find((wish) => wish.id === wishId));
  }

  const viewAddWishFormModal = () => {
    setOpenModal("ADD");
  }

  const closeWishFormModal = (event) => {
      setOpenModal("");
  };
  
  const addWishHandler = (wish) => {
    setWishes((prevWishes) => {
      return [wish, ...prevWishes];
    });
  };

  const editWishHandler = (updatedWish) => {
    const updatedWishes = wishes.filter(wish => wish.id !== updatedWish.id);
    updatedWishes.unshift(updatedWish);
    setWishes(updatedWishes);
    setOpenModal('');
  }
  
  const deleteWishHandler = (deleteWish) => {
    const deleteWishes = wishes.filter(wish => wish.id !== deleteWish.id);
    setWishes(deleteWishes);
    setOpenModal('');
  }

  return (
    <div>
      <Header onClick={viewAddWishFormModal}/>
      <AddWishModal open={openModal} onClose={closeWishFormModal} submitForm={addWishHandler}/>
      <EditWishModal wish={editWish} open={openModal} onClose={closeWishFormModal} updateForm={editWishHandler} onDelete={deleteWishHandler}/>
      <Wishes items={wishes} viewEdit={viewEditWishFormModal}/>
      
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

import Wishes from './components/WishList/Wishes'
import NewWish from './components/NewWish/NewWish';


const DUMMY_WISHES = [
  {
    id: '1',
    title: 'Marc Jacobs The Medium Tote Bag',
    store: 'Nordstrom',
    price: 195.00
  },
  {
    id: '2',
    title: 'Diamond Gold-Tone SS Watch',
    store: "Macy's",
    price: 367.50
  },
  {
    id: '3',
    title: 'Cowboy Boots',
    store: 'DSW',
    price: 100.00
  },
  {
    id: '4',
    title: 'Milsbo Glass Cabinet',
    store: 'Ikea',
    price: 249.99
  },
];

function App() {
  const [ wishes, setWishes ] = useState(DUMMY_WISHES);

  const addWishHandler = (wish) => {
    setWishes((prevWishes) => {
      return [wish, ...prevWishes];
    });
  };

  return (
    <div>
      <h2>Wish List</h2>
      <NewWish onAddWish={addWishHandler}/>
      <Wishes items={wishes}/>
    </div>
  );
}

export default App;

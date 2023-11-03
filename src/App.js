import React, { useState } from 'react';
import './App.css';

import Wishes from './components/WishList/Wishes'
import NewWish from './components/NewWish/NewWish';


const DUMMY_WISHES = [
  {
    id: '1',
    title: 'The Medium Tote Bag',
    brand: 'Marc Jacobs',
    price: 195.00,
    size: 'Medium',
    color: 'Beige',
    url: 'https://www.marcjacobs.com/default/the-medium-tote-bag/M0016161-050.html',
  },
  {
    id: '2',
    title: 'Diamond Gold-Tone SS Watch',
    brand: 'Seiko',
    price: 367.50,
    size: '',
    color: 'Gold',
    url: 'https://www.macys.com/shop/product/seiko-womens-diamond-1-8-ct.-t.w.-gold-tone-stainless-steel-bracelet-watch-30mm?ID=12043652',
  },
  {
    id: '3',
    title: 'Cowboy Boots',
    brand: 'Free People',
    price: 78.00,
    size: '6.5',
    color: 'Blush',
    url: 'https://www.freepeople.com/shop/vegan-ranch-boot/?color=013&countryCode=US&gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_lAmy87Cv8WYgnFju55mljKaY4jkjPz0QXs2HpLxFaNo2bDaSZ0CucaAtZEEALw_wcB&gclsrc=aw.ds&inventoryCountry=US&utm_kxconfid=vx6ro62gj&type=REGULAR&quantity=1',
  },
  {
    id: '4',
    title: 'Milsbo Glass Cabinet',
    brand: 'Ikea',
    price: 219.99,
    size: '',
    color: 'White',
    url: 'https://www.ikea.com/us/en/p/milsbo-glass-door-cabinet-white-00396416/',
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

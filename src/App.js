import logo from './logo.svg';
import './App.css';
import WishItem from './components/WishList/WishItem';

function App() {
  const wishes = [
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

  return (
    <div>
      <WishItem 
      title={wishes[0].title}
      store={wishes[0].store}
      price={wishes[0].price}
      ></WishItem>
      <WishItem 
      title={wishes[1].title}
      store={wishes[1].store}
      price={wishes[1].price}
      ></WishItem>
      <WishItem 
      title={wishes[2].title}
      store={wishes[2].store}
      price={wishes[2].price}
      ></WishItem>
      <WishItem 
      title={wishes[3].title}
      store={wishes[3].store}
      price={wishes[3].price}
      ></WishItem>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

const dishes = [
  {
    name: 'Buttermilk Pancakes',
    description:
      'Fluffy pancakes made with buttermilk and served with syrup',
    category: 'Breakfast',
    id: '87b1c491-e0f8-45e6-bfc6-d556880e9c9f',
    imgSrc: './item-1.jpeg',
  },
  {
    name: 'Diner Double',
    description:
      'A classic American burger with two beef patties, cheese, lettuce, tomato, and special sauce',
    category: 'Lunch',
    id: '72f44da7-e5c1-4b1d-9d05-f5b923fb9be0',
    imgSrc: './item-2.jpeg',
  },
  {
    name: 'Godzilla Milkshake',
    description:
      'An over-the-top milkshake loaded with candy and topped with whipped cream and a cherry',
    category: 'Snack',
    id: '56e8e8c5-6f5c-47e9-80cf-6f3e6d3c3e50',
    imgSrc: './item-3.jpeg',
  },
  {
    name: 'Country Delight',
    description:
      'A hearty dish featuring fried chicken, mashed potatoes, and gravy',
    category: 'Dinner',
    id: '9d0b8416-1a04-4736-8a0d-b0b80e076c97',
    imgSrc: './item-4.jpeg',
  },
  {
    name: 'Egg Attack',
    description:
      'A breakfast sandwich with fried eggs, bacon, and cheese on a toasted bagel',
    category: 'Breakfast',
    id: 'd5d72f1f-b9a9-4f8d-a96b-a7a1bfc0b8e1',
    imgSrc: './item-5.jpeg',
  },
  {
    name: 'Oreo Dream',
    description:
      'A creamy and indulgent milkshake made with Oreo cookies and vanilla ice cream',
    category: 'Dinner',
    id: 'bfaa36c9-f99d-4b89-aa1f-0b7ed1733e6d',
    imgSrc: './item-6.jpeg',
  },
  {
    name: 'Bacon Overflow',
    description:
      'A breakfast platter with eggs, bacon, sausage, and toast',
    category: 'Breakfast',
    id: '5a5b0fe4-c984-4f4d-8d3b-3e23ba3b2d39',
    imgSrc: './item-7.jpeg',
  },
  {
    name: 'American Classic',
    description:
      'A classic American cheeseburger with all the fixings',
    category: 'Lunch',
    id: 'e5d8d37e-9c7f-4376-8b97-2d6a12b7c478',
    imgSrc: './item-8.jpeg',
  },
  {
    name: 'Quarantine Buddy',
    description:
      'A comfort food buddy with whome you can enjoy spending time and share memories during lockdown.',
    category: 'Dinner',
    id: '1b8f87a6-9cff-4e1c-b8d9-d34a0f00045b',
    imgSrc: './item-9.jpeg',
  },
];

function App() {
  const [displayMenuItems, setDisplayMenuItems] = useState(dishes);
  const setBreakfast = () => {
    setDisplayMenuItems(
      dishes.filter((dish) => dish.category === 'Breakfast')
    );
  };
  const setDinner = () => {
    setDisplayMenuItems(
      dishes.filter((dish) => dish.category === 'Dinner')
    );
  };
  const setLunch = () => {
    setDisplayMenuItems(
      dishes.filter((dish) => dish.category === 'Lunch')
    );
  };
  return (
    <div className="app">
      <div className="title">
        <h2 className="heading">Our Menu</h2>
        <div className="underline"></div>
      </div>

      <div className="btn-container">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            setDisplayMenuItems(dishes);
          }}
        >
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={setBreakfast}
        >
          breakfast
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={setLunch}
        >
          lunch
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={setDinner}
        >
          Dinner
        </button>
      </div>
      <div className="section-center">
        {displayMenuItems.map((menuItem) => {
          return <Dish key={menuItem.id} menuItem={menuItem} />;
        })}
      </div>
    </div>
  );
}

function Dish(props) {
  const { imgSrc, name, description } = props.menuItem;
  return (
    <article className="menu-item">
      <img src={imgSrc} alt={name} className="photo" />
      <div className="item-info">
        <header>
          <h4>{name}</h4>
          <h4 className="price">$15</h4>
        </header>
        <p className="item-text">{description}</p>
      </div>
    </article>
  );
}
export default App;

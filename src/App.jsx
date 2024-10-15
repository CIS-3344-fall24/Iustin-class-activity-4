import React from 'react';
import DoubleArray from "./components/DoubleArray/DoubleArray";
import ProductList from "./components/ProductList/ProductList";
import './App.css';

const App = () => {
    const numbers = [2, 4, 6, 8, 10];
    const products = [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
        {id: 4, name: 'Item 4'}
    ];

  return (
      <div className="App">
          <DoubleArray numbers = {numbers} />
          <ProductList list={products} />
      </div>
  );
};

export default App;

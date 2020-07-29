import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Product from './components/Product'

function App() {
  return (
    <Provider store={store} >
      <Product />
    </Provider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Product from './components/Product'
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={store} >
      <Container maxWidth="lg">
        <Product />
      </Container>
    </Provider>
  );
}

export default App;

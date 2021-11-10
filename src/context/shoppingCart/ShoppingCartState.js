import React, { useState, useEffect, useReducer } from 'react';
import ShoppingCartContext from './shoppingCartContext';
import ShoppingCartReducer from './shoppingCartReducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../types';
import { fetchProducts } from '../../fetchData';

const ShoppingCartState = (props) => {
  const cartInLocalStorage = window.localStorage.getItem('shoppingCart');

  let initialState = {
    shoppingCart: [],  
  };

  if (cartInLocalStorage) {
    initialState = {
      shoppingCart: JSON.parse(cartInLocalStorage),
    };
  }

  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  const shoppingCart = state.shoppingCart;

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProductData(productData);
    });
  }, []);

  useEffect(() => {
    console.log('local storage use effect working ');
    window.localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const getShoppingCartTotal = (shoppingCart) => {
    const total = shoppingCart.reduce((accumulator, item, index, array) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return total;
  };
  const addItemToCart = (item) => {
    const { id, title, price, image } = item;

    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        title,
        price,
        image,
      },
    });
  };

  //remove from shopping cart

  const removeFromCart = (itemId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        itemId,
      },
    });
  };

  const handleIncrement = (itemId) => {
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: {
        itemId,
      },
    });
  };

  const handleDecrement = (itemId) => {
    dispatch({
      type: DECREMENT_QUANTITY,
      payload: {
        itemId,
      },
    });
  };

  const emptyCart = () =>{
    dispatch({
      type: EMPTY_CART
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        products: productData,
        shoppingCart: state.shoppingCart,
        addItemToCart,
        removeFromCart,
        handleIncrement,
        handleDecrement,
        emptyCart,
        total: getShoppingCartTotal(shoppingCart),
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;

import React, { useReducer } from 'react';
import ShoppingCartContext from './shoppingCartContext';
import ShoppingCartReducer from './shoppingCartReducer';
import {} from '../types';

const ShoppingCartState = (props) => {
  const initialState = {
    // users: [],
    // user: {},
    // repos: [],
    // showClear: false,
    // loading: false,
  };

  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  //set shopping cart to local storage

  //add item to cart

  //remove from shopping cart

  //empty shopping cart

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addItemToCart,
        removeFromCart,
        emptyCart,
        total: getShoppingCartTotal(shoppingCart),
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;

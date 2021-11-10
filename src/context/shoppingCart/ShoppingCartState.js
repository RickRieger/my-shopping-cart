import React, { useState, useEffect, useReducer } from 'react';
import ShoppingCartContext from './shoppingCartContext';
import ShoppingCartReducer from './shoppingCartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../types';
import { fetchProducts } from '../../fetchData';

const ShoppingCartState = (props) => {
  const initialState = {
    shoppingCart: [],
  };

  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProductData(productData);
    });
  }, []);

  //set shopping cart to local storage

  //add item to cart

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

  //empty shopping cart

  return (
    <ShoppingCartContext.Provider
      value={{
        products: productData,
        shoppingCart: state.shoppingCart,
        addItemToCart,
        removeFromCart,
        // emptyCart,
        // total: getShoppingCartTotal(shoppingCart),
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;

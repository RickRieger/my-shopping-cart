import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, price, image, quantity } = action.payload;
      return {
        shoppingCart: [
          ...state.shoppingCart,
          { id, title, price, image, quantity },
        ],
      };
    case REMOVE_FROM_CART:
      console.log(action.payload);
      let newShoppingCart = state.payload;
      const index = state.shoppingCart
        .map((e) => e.id)
        .indexOf(action.payload.itemId);
      if (index >= 0) {
        newShoppingCart.splice(index, 1);
      }

      // console.log(action.payload.itemId);

      // const itemsToBeRemoved = state.shoppingCart.find(
      //   (item) => item.id === action.payload.itemId
      // );

      // console.log(itemsToBeRemoved);

      // const filteredArray = state.shoppingCart.filter(
      //   (item) => item.id !== action.payload.itemId
      // );

      return {
        shoppingCart: newShoppingCart,
      };
    // case EMPTY_CART_ACTION
    //   return {

    //   };
    default:
      return state;
  }
};

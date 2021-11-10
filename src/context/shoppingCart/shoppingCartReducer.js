import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, price, image } = action.payload;

      const itemFound = state.shoppingCart.find((item) => item.id === id);

      if (itemFound) {
        itemFound.quantity = itemFound.quantity + 1;
        return {
          shoppingCart: [
            ...state.shoppingCart.filter(
              (item) => item.id !== action.payload.id
            ),
            itemFound,
          ],
        };
      }
      return {
        shoppingCart: [
          ...state.shoppingCart,
          { id, title, price, image, quantity: 1, timestamp: Date.now() },
        ],
      };

    case INCREMENT_QUANTITY:
      const incrementItemFound = state.shoppingCart.find(
        (item) => item.id === action.payload.itemId
      );
      incrementItemFound.quantity = incrementItemFound.quantity + 1;

      return {
        shoppingCart: [
          ...state.shoppingCart.filter((item) => item.id !== action.payload.id),
        ],
      };
    case DECREMENT_QUANTITY:
      const decrementItemFound = state.shoppingCart.find(
        (item) => item.id === action.payload.itemId
      );
      decrementItemFound.quantity = decrementItemFound.quantity - 1;

      return {
        shoppingCart: [
          ...state.shoppingCart.filter((item) => item.id !== action.payload.id),
        ],
      };

    case REMOVE_FROM_CART:
      const index = state.shoppingCart
        .map((obj) => obj.id)
        .indexOf(action.payload.itemId);

      if (index >= 0) {
        state.shoppingCart.splice(index, 1);
      }

      return {
        shoppingCart: state.shoppingCart,
      };
    case EMPTY_CART:
      return {
        shoppingCart: [],
      };
    default:
      return state;
  }
};

// const sortCartItems = (shoppingCartArray) => {
//   const sorted = shoppingCartArray.sort(function (x, y) {
//     console.log({ x, y });
//     console.log({ xTimestamp: x.timestamp });

//     console.log('number: ', y.timestamp - x.timestamp);

//     return y.timestamp - x.timestamp;
//   });

//   console.log({ shoppingCartArray, sorted });

//   return sorted;
// };

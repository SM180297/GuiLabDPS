import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: '', name: "", price: '' },
  ],
  products2: [
    { id: 1, name: "Camisa", price: 20 },
    { id: 2, name: "Pantalones", price: 30 },
    { id: 3, name: "Zapatos", price: 50 },
    { id: 4, name: "calcetines", price: 5 },
    { id: 5, name: "Gorra", price: 8 },
    { id: 6, name: "Lentes", price: 90 },
    { id: 7, name: "Peines", price: 2 },
    { id: 8, name: "centro negro", price: 10 },
    { id: 9, name: "tenis", price: 40 },
    { id: 10, name: "colas", price: 0.5 },
  ],
  
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products2.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}

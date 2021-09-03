import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });

    global.name= 0;
  };

  return (
    <>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <div className="titulo"><p >Productos en cola</p></div>
      
      <article className="box">
        <button onClick={clearCart}>Limpiar listado</button>
        <p className="total">El pago neto es = $ {global.name}.00</p>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
      </>
  );
};
export default ShoppingCart;

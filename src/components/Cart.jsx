
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </div>
  );
};

export default Cart;

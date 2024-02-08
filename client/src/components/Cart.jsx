import CartList from "./CartList";

const Cart = ({ cart }) => {
  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length == 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <CartList cart={cart} />
        )}
        <div className="checkout-button">
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;

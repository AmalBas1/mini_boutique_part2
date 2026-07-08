import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, onRemoveFromCart, onClose }) {
  const total = cart.reduce((acc, item) => acc + item.prix, 0);

  return (
    <>
      <div className="cart-backdrop cart-visible" onClick={onClose} />
      <div className="cart cart--modal cart-visible" role="dialog">
        <button className="cart__close" onClick={onClose}>✕</button>
        <h2 className="cart__title">Votre panier</h2>
        
        {cart.length === 0 ? (
          <p className="cart__empty">Votre panier est vide</p>
        ) : (
          <ul className="cart__list">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} onRemove={onRemoveFromCart} />
            ))}
          </ul>
        )}
        
        <h3 className="cart__summary">
          Articles: {cart.length} • Total : {total.toFixed(2)} MAD
        </h3>
      </div>
    </>
  );
}

export default Cart;
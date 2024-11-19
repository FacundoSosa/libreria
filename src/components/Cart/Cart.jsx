import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cart, total, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleCheckout = () => {
    const message = `Hola, quiero comprar los siguientes libros: ${cart.map(item => `${item.title} (x${item.quantity})`).join(', ')}`;
    window.open(`https://wa.me/092348907?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ flex: 1 }}>{item.title} - ${item.price} x {item.quantity} = ${item.price * item.quantity}</span>
              <button onClick={() => decreaseQuantity(item.id)} style={{ margin: '0 5px' }}>-</button>
              <button onClick={() => increaseQuantity(item.id)} style={{ margin: '0 5px' }}>+</button>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
        <p><strong>Total: ${total}</strong></p>
        {cart.length > 0 && <button onClick={handleCheckout}>Comprar por WhatsApp</button>}
      </div>
    </div>
  );
}

export default Cart;


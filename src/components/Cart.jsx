import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

function Cart() {
  const { cart, total } = useContext(CartContext);

  const handleCheckout = () => {
    const message = `Hola, quiero comprar los siguientes libros: ${cart.map(item => item.title).join(', ')}`;
    window.open(`https://wa.me/092348907?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    {cart.map(item => (
    <p key={item.id}>{item.title} - ${item.price}</p>
    ))}
    <p>Total: ${total}</p>
    <button onClick={handleCheckout}>Comprar por WhatsApp</button>
    </div>
  );
}
export default Cart;
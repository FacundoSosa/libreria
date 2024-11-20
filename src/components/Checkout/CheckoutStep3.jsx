import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CheckoutStep3({ formData, shippingOption, prevStep }) {
  const { cart, total } = useContext(CartContext); // Obtener datos del carrito desde el contexto

  const handlePayment = () => {
    // Construcción del mensaje para WhatsApp
    const itemsSummary = cart
      .map(item => `${item.title} (x${item.quantity}) - $${item.price * item.quantity}`)
      .join('\n');

    const message = `
      Cliente: ${formData.name}
      País: ${formData.country}
      Ciudad: ${formData.city}
      Teléfono: ${formData.phone}
      Código Postal: ${formData.postalCode}
      Departamento: ${formData.department}
      Opción de Envío: ${shippingOption}
      Carrito:
      ${itemsSummary}
      Total: $${total}
    `;
    window.open(`https://wa.me/092348907?text=${encodeURIComponent(message)}`);
  };

  return (
    <div>
      <h2>Resumen de tu Compra</h2>
      {/* Mostrar los datos del cliente */}
      <div>
        <h3>Datos del Cliente</h3>
        <p><strong>Nombre:</strong> {formData.name}</p>
        <p><strong>País:</strong> {formData.country}</p>
        <p><strong>Ciudad:</strong> {formData.city}</p>
        <p><strong>Teléfono:</strong> {formData.phone}</p>
        <p><strong>Código Postal:</strong> {formData.postalCode}</p>
        <p><strong>Departamento:</strong> {formData.department}</p>
      </div>

      {/* Mostrar la opción de envío */}
      <div>
        <h3>Envío</h3>
        <p><strong>Opción de Envío:</strong> {shippingOption}</p>
      </div>

      {/* Mostrar el resumen del carrito */}
      <div>
        <h3>Carrito</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> ${total}</p>
      </div>

      {/* Botones de navegación */}
      <div>
        <button type="button" onClick={prevStep}>Atrás</button>
        <button onClick={handlePayment}>Pagar</button>
      </div>
    </div>
  );
}

export default CheckoutStep3;

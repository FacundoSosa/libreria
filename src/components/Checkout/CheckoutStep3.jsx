import React from 'react';

function CheckoutStep3({ formData, shippingOption, summary, prevStep }) {
  const handlePayment = () => {
    const message = `
      Cliente: ${formData.name}
      País: ${formData.country}
      Teléfono: ${formData.phone}
      Envío: ${shippingOption}
      Total: $${summary.total}
    `;
    window.open(`https://wa.me/092348907?text=${encodeURIComponent(message)}`);
  };

  return (
    <div>
      <h2>Resumen de tu Compra</h2>
      {/* Aquí muestra los datos y el carrito */}
      <button type="button" onClick={prevStep}>Atrás</button>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
}

export default CheckoutStep3;

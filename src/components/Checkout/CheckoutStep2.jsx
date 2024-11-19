import React from 'react';

function CheckoutStep2({ shippingOption, setShippingOption, nextStep, prevStep }) {
  const handleChange = (e) => {
    setShippingOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Opciones de Envío</h2>
      <label>
        <input type="radio" value="UES" checked={shippingOption === 'UES'} onChange={handleChange} />
        UES
      </label>
      <label>
        <input type="radio" value="DAC" checked={shippingOption === 'DAC'} onChange={handleChange} />
        DAC
      </label>
      <label>
        <input type="radio" value="Mirtrans" checked={shippingOption === 'Mirtrans'} onChange={handleChange} />
        Mirtrans
      </label>
      <button type="button" onClick={prevStep}>Atrás</button>
      <button type="submit">Siguiente</button>
    </form>
  );
}

export default CheckoutStep2;

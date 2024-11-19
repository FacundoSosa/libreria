import React from 'react';

function CheckoutStep1({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos Personales</h2>
      <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleChange} required />
      <input type="text" name="country" placeholder="País" value={formData.country} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
      <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required />
      <input type="text" name="postalCode" placeholder="Código postal" value={formData.postalCode} onChange={handleChange} required />
      <input type="text" name="department" placeholder="Departamento" value={formData.department} onChange={handleChange} required />
      <button type="submit">Siguiente</button>
    </form>
  );
}

export default CheckoutStep1;
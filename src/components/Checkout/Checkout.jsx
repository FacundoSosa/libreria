import React, { useState } from 'react';
import CheckoutStep1 from './CheckoutStep1'; // Formulario de datos personales
import CheckoutStep2 from './CheckoutStep2'; // Opciones de envío
import CheckoutStep3 from './CheckoutStep3'; // Resumen final

function Checkout() {
  const [currentStep, setCurrentStep] = useState(1); // Paso actual
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    city: '',
    postalCode: '',
    department: '',
  });
  const [shippingOption, setShippingOption] = useState('');
  const [summary, setSummary] = useState({});

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div>
      {currentStep === 1 && (
        <CheckoutStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <CheckoutStep2 shippingOption={shippingOption} setShippingOption={setShippingOption} nextStep={nextStep} prevStep={prevStep} />
      )}
      {currentStep === 3 && (
        <CheckoutStep3 formData={formData} shippingOption={shippingOption} summary={summary} setSummary={setSummary} prevStep={prevStep} />
      )}
    </div>
  );
}

export default Checkout;
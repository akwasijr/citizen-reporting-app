import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Confirmation from './components/Confirmation';
import './styles/globals.css';

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    incidentType: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0].slice(0, 5),
    location: '',
    useCurrentLocation: false,
    isAnonymous: false,
    name: '',
    email: '',
    phone: '',
    receiveUpdates: true,
    allowContact: true,
    media: {
      photo: null,
      video: null,
      voice: null
    }
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => setIsSubmitted(true);

  const resetForm = () => {
    setFormData({
      incidentType: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().split(' ')[0].slice(0, 5),
      location: '',
      useCurrentLocation: false,
      isAnonymous: false,
      name: '',
      email: '',
      phone: '',
      receiveUpdates: true,
      allowContact: true,
      media: {
        photo: null,
        video: null,
        voice: null
      }
    });
    setIsSubmitted(false);
    setStep(1);
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <div className="step-form">
          <h1>Report an Incident</h1>
          <p>Step {step} of {totalSteps}</p>
          {step === 1 && <StepOne formData={formData} setFormData={setFormData} onNext={handleNext} />}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <StepThree formData={formData} setFormData={setFormData} onBack={handleBack} onSubmit={handleSubmit} />}
        </div>
      ) : (
        <Confirmation formData={formData} onNewReport={resetForm} />
      )}
    </div>
  );
}

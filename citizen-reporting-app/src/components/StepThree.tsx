import React from 'react';

export default function StepThree({ formData, setFormData, onBack, onSubmit }) {
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <h2>Step 3: Personal Info & Preferences</h2>

      <label>
        <input
          type="checkbox"
          name="isAnonymous"
          checked={formData.isAnonymous}
          onChange={handleChange}
        />{' '}
        Report anonymously
      </label>

      {!formData.isAnonymous && (
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name (Optional)"
            className="w-full p-2 border rounded mb-2"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone (Optional)"
            className="w-full p-2 border rounded mb-2"
          />
        </div>
      )}

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleChange}
            disabled={formData.isAnonymous}
          />{' '}
          Receive updates
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleChange}
            disabled={formData.isAnonymous}
          />{' '}
          Allow contact
        </label>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">Back</button>
        <button
          onClick={onSubmit}
          className="btn-primary"
          disabled={!formData.isAnonymous && !formData.email}
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}

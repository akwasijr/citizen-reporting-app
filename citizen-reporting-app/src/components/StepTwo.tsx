import React from 'react';

export default function StepTwo({ formData, setFormData, onNext, onBack }) {
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMediaSelect = type => {
    alert(`Media ${type} selection will be implemented later.`);
  };

  const handleUseCurrentLocation = () => {
    setFormData(prev => ({
      ...prev,
      useCurrentLocation: !prev.useCurrentLocation,
      location: !prev.useCurrentLocation ? 'Current Location (Atlanta)' : ''
    }));
  };

  return (
    <div>
      <h2>Step 2: Location & Media</h2>

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label>Time</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />

      <label className="block">Use Current Location</label>
      <input
        type="checkbox"
        name="useCurrentLocation"
        checked={formData.useCurrentLocation}
        onChange={handleUseCurrentLocation}
        className="mb-2"
      />

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        disabled={formData.useCurrentLocation}
        placeholder="Enter location"
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[{ id: 'photo', label: 'Photo' }, { id: 'video', label: 'Video' }, { id: 'voice', label: 'Voice' }].map(item => (
          <button
            key={item.id}
            onClick={() => handleMediaSelect(item.id)}
            className="p-2 border rounded"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">Back</button>
        <button onClick={onNext} disabled={!formData.location} className="btn-primary">Next</button>
      </div>
    </div>
  );
}

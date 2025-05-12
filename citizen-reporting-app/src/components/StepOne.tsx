import React from 'react';

const incidentTypes = [
  { id: 'road', name: 'Road Repair', icon: '🚧' },
  { id: 'garbage', name: 'Garbage/Litter', icon: '🗑️' },
  { id: 'streetlight', name: 'Broken Streetlight', icon: '💡' },
  { id: 'water', name: 'Water Issue', icon: '💧' },
  { id: 'noise', name: 'Noise Complaint', icon: '🔊' },
  { id: 'safety', name: 'Safety Concern', icon: '⚠️' },
  { id: 'graffiti', name: 'Graffiti', icon: '🖌️' },
  { id: 'animal', name: 'Animal Services', icon: '🐾' },
  { id: 'other', name: 'Other', icon: '📝' }
];

export default function StepOne({ formData, setFormData, onNext }) {
  return (
    <div>
      <h2>Step 1: Incident Type & Description</h2>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {incidentTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setFormData({ ...formData, incidentType: type.id })}
            className={`p-2 rounded border ${formData.incidentType === type.id ? 'bg-blue-200' : 'bg-white'}`}
          >
            <div className="text-xl">{type.icon}</div>
            <div>{type.name}</div>
          </button>
        ))}
      </div>
      <textarea
        placeholder="Describe the incident..."
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={onNext} disabled={!formData.incidentType} className="btn-primary">
        Next
      </button>
    </div>
  );
}

import React from 'react';

export default function Confirmation({ formData, onNewReport }) {
  const referenceNumber = `ATL-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
      <p className="mb-2">Your report has been submitted successfully.</p>

      <div className="bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded inline-block mb-4">
        Reference Number: {referenceNumber}
      </div>

      {!formData.isAnonymous && formData.receiveUpdates && (
        <p className="mb-4 text-gray-600">Updates will be sent to: {formData.email}</p>
      )}

      <button onClick={onNewReport} className="btn-primary">
        Submit Another Report
      </button>
    </div>
  );
}

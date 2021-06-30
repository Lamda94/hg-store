import React from 'react';

export default function spinner() {
  return (
    <div className="text-center mt-5 pt-5">
      <div
        className="spinner-border"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

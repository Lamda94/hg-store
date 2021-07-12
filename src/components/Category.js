import React from 'react';

export default function Category({ data }) {
  return (
    <div className="card m-5" style={{ width: '18rem' }}>
      <img
        src={data.img}
        className="card-img-top"
        alt="category image"
        height="200px"
        width="auto"
      />
      <div className="card-body bg-secondary">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product({ data }) {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card text-dark bg-light mb-3">
        <img src={data.images} className="card-img-top card-header" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div className="row">
            <Link to={`/detail/${data.id}`}>
              <button type="button" className="btn btn-primary">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

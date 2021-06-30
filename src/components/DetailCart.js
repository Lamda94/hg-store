import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Detail({ data }) {
  const remove = (i) => {};

  return (
    <div className="row col-9 ps-5">
      <div className="card mb-3 pt-2 ms-2" style={{ width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4 pt-5">
            <img
              src={data.images}
              alt="Imagen del producto."
              width="80%"
              className="ms-4 mt-4"
            />
          </div>
          <div className="col-md-8 border-start">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.description}</p>
              <ul className="border-top mt-3 row pt-3">
                <li>Total:{` ${data.price * data.amount} USD`}</li>
                <li>Delivery time: {`${data.time} Dias`} </li>
                <li>Amount: {data.amount}</li>
              </ul>
            </div>
            <div class="card-footer">
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

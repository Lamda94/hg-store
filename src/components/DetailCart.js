import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Detail({ data }) {
  const [cart, setCart] = useContext(CartContext);
  const remove = () => {
    const ca = cart.filter((product) => product.id !== data.id);
    setCart(ca);
  };

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
                <li>Tiempo de etrega: {`${data.time} Dias`} </li>
                <li>Cantidad: {data.amount}</li>
              </ul>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-danger" onClick={remove}>
                Quitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

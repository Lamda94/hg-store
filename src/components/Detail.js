import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Detail({ data }) {
  const [number, setNumber] = useState(0);
  const [ava] = useState(data.availability);
  const [cart, setCart] = useContext(CartContext);
  const Add = () => {
    if (number < ava) {
      if (data.availability > 0) {
        return setNumber(number + 1);
      }
    }
  };

  const Diminish = () => {
    return setNumber(() => {
      if (number > 0) {
        return number - 1;
      } else {
        return number;
      }
    });
  };

  const addCart = () => {
    if (number > 0) {
      if (cart.length > 0) {
        const n = cart.find((d) => {
          if (d.id === data.id) {
            return d;
          }
        });
        if (n == undefined || n.length == 0) {
          setCart([...cart, { ...data, amount: number }]);
        } else {
          const d = cart.map((c) => {
            if (c.id === data.id && c.amount + number <= c.availability) {
              c.amount += number;
            } else {
              data.availability = 0;
              setNumber(0);
            }
            return c;
          });
          setCart(d);
        }
      } else {
        data.amount = number;
        setCart([data]);
      }
    }
  };

  return (
    <div
      className="categories col-9 ps-5 border-start border-end"
      style={{ height: '100vh' }}
    >
      <div className="row col-9 ">
        <h2 className=" mt-5 text-center mb-4">Detalles del Producto</h2>
        <div className="card mb-3 pt-2 " style={{ width: '100%' }}>
          <div className="row g-0">
            <div className="col-md-4 pt-3 pb-2">
              <img
                src={data.images}
                alt="Imagen del producto."
                width="100%"
                className="rounded mt-4 mb-4"
              />
            </div>
            <div className="col-md-8 border-start">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <ul className="border-top mt-3 row pt-3">
                  <li>Precio:{` ${data.price} USD`}</li>
                  <li>Tiempo de entrega: {`${data.time} Dias`} </li>
                  <li>
                    Disponibilidad:{' '}
                    {data.availability === 0 ? 'Agotado' : 'Disponible'}
                  </li>
                </ul>
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={Diminish}
                  >
                    -
                  </button>
                  <label
                    className="btn btn-outline-secondary"
                    htmlFor="btnradio2"
                  >
                    {number}
                  </label>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={Add}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className={`btn ${
                    number > 0 ? 'btn-primary' : 'btn-secondary'
                  } ms-2`}
                  onClick={addCart}
                >
                  A??adir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

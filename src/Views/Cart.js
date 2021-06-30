import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Detail from '../components/DetailCart';

export default () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let n = 0;
    cart.forEach((c) => {
      n += c.price * c.amount;
    });
    setTotal(n);
  }, []);

  return (
    <div className="row d-flex justify-content-center p-5">
      <div
        className="categories col-9 ps-5 border-start border-end"
        style={{ height: '100vh' }}
      >
        {cart.length == 0 ? (
          <h3 className="text-center mt-5">¡Cart empty!</h3>
        ) : (
          <>
            <h2 className=" mt-5 text-center mb-4">Cart Details</h2>
            {cart.map((c) => (
              <Detail key={c.id} data={c} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

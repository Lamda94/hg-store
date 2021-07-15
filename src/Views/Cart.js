import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Detail from '../components/DetailCart';
import { Link } from 'react-router-dom';

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

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="row d-flex justify-content-center p-5">
      <div
        className="categories col-9 ps-5 border-start border-end"
        style={{ height: '100%' }}
      >
        {cart.length === 0 ? (
          <h3 className="text-center mt-5">¡Carrito vacio!</h3>
        ) : (
          <>
            <h2 className=" mt-5 text-center mb-4">Detalles del Carrito</h2>
            {cart.map((c) => (
              <Detail key={c.id} data={c} />
            ))}
            <h4 className="text-center">{`Total: ${total} USD`}</h4>
            <div className="d-flex justify-content-center mt-5">
              <Link to="/orders">
                <button type="button" class="btn btn-success">
                  Comprar
                </button>
              </Link>
              <button
                type="button"
                class="ms-3 btn btn-danger"
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

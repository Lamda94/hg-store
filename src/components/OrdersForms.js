import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase';

export default function OrdersForms() {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [validate, setValidate] = useState({ validate: false, result: false });
  const [order, setOrder] = useState('');

  useEffect(() => {
    let n = 0;
    cart.forEach((c) => {
      n += c.price * c.amount;
    });
    setTotal(n);
  }, []);

  const fecha = new Date();
  const hoy = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
  function validarEmail(valor) {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        valor
      )
    ) {
      document.getElementById('emailValidator').classList.add('d-none');
      return true;
    } else {
      document.getElementById(
        'emailValidator'
      ).innerText = `La dirección de email ${valor} es incorrecta!.`;
      document.getElementById('emailValidator').classList.remove('d-none');
      return false;
    }
  }
  const createOrder = async (e) => {
    e.preventDefault();
    const name = document.getElementById('InputName').value;
    const email = document.getElementById('InputEmail').value;
    if (isNaN(name) && validarEmail(email)) {
      const order = {
        data: {
          name: name,
          email: email,
          fecha: hoy,
          total: total,
          products: { ...cart },
        },
      };
      console.log(order);
      const id = await db.collection('Orders').add(order);
      setOrder(id.id);
      setValidate({ validate: true, result: true });
      setCart([]);
    }
  };

  return validate.validate && validate.result ? (
    <>
      <div
        class="alert alert-success mt-5 text-center"
        role="alert"
        id="emailValidator"
      >
        ¡Orden enviada correctamente! <br /> Id de la orden: {order}.
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/">
          <button type="button" class="btn btn-success">
            Volver
          </button>
        </Link>
      </div>
    </>
  ) : (
    <form className="p-5 pt-2" onSubmit={createOrder}>
      <h2 className="text-center mb-5">Terminar Compra</h2>
      <div class="mb-3">
        <label for="InputName" class="form-label">
          Nombre completo
        </label>
        <input
          type="text"
          class="form-control"
          id="InputName"
          aria-describedby="nameClient"
          placeholder="Nombre del comprador"
          required
        />
      </div>
      <div class="mb-3">
        <label for="InputEmail" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          placeholder="Email de contacto"
          aria-describedby="emailClient"
          required
        />
        <div
          class="alert alert-danger mt-2 d-none"
          role="alert"
          id="emailValidator"
        ></div>
      </div>
      <div class="mb-3">
        <label for="InputDate" class="form-label">
          Fecha
        </label>
        <input
          type="text"
          class="form-control"
          id="InputDate"
          value={hoy}
          aria-describedby="dateClient"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="InputTotal" class="form-label">
          Total
        </label>
        <input
          type="text"
          class="form-control"
          id="InputTotal"
          aria-describedby="nameClient"
          value={total + ' USD'}
          disabled
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="submit" class="btn btn-success">
          Comprar
        </button>
      </div>
    </form>
  );
}

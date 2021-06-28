import React, { useContext, useEffect } from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function () {
  const [cart, setCart] = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HG Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem name={'Home'} src={'/'} active={true} />
            <NavItem name={'Store'} src={'/Store'} activo={false} />
            <NavItem name={'About'} src={'/About'} activo={false} />
            <NavItem name={'Contact'} src={'/Contact'} activo={false} />
          </ul>
        </div>
        <div className="d-flex">
          <span
            className="count me-2 rounded-pill text-light pt-2 ps-3 pe-3"
            style={{ background: 'red' }}
          >
          {cart.length}
          </span>
          <img
            className="img"
            src="https://firebasestorage.googleapis.com/v0/b/hg-store-293e9.appspot.com/o/cart.svg?alt=media&token=d60920bb-bd11-4b2c-baed-ecba78b66dac"
          />
        </div>
      </div>
    </nav>
  );
}
